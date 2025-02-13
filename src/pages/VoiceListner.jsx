import { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const VoiceListner = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState("");
    const [transcript, setTranscript] = useState("");
    const [volumeData, setVolumeData] = useState([]);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);
    const dataArrayRef = useRef(null);

    useEffect(() => {
        let animationFrame;
        if (isRecording) {
            const updateVolume = () => {
                analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                const maxVolume = Math.max(...dataArrayRef.current);
                setVolumeData((prev) => [...prev.slice(-50), maxVolume]);
                animationFrame = requestAnimationFrame(updateVolume);
            };
            updateVolume();
        }
        return () => cancelAnimationFrame(animationFrame);
    }, [isRecording]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        audioContextRef.current = new AudioContext();
        sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.fftSize = 256;
        dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);

        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
            }
        };

        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url);
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
        setVolumeData([]);
    };

    const startListening = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const speechText = event.results[0][0].transcript;
            setTranscript(speechText);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };

        recognition.start();
    };

    const chartData = {
        labels: volumeData.map((_, index) => index),
        datasets: [
            {
                label: "Volume Level",
                data: volumeData,
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                fill: true,
            },
        ],
    };

    return (
        <div className="relative isolate flex justify-center items-center min-h-screen px-6 lg:px-8 bg-gray-100">
        <div className="p-4 bg-white rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 text-center">Voice Recorder & Listener</h2>
            <div className="flex flex-col items-center">
                <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`px-4 py-2 text-white rounded w-full ${isRecording ? "bg-red-500" : "bg-green-500"}`}
                >
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </button>
                <button
                    onClick={startListening}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded w-full"
                >
                    Start Listening
                </button>
            </div>
            {isRecording && (
                <div className="mt-4 w-full h-32">
                    <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            )}
            {audioURL && (
                <div className="mt-4 text-center">
                    <audio controls src={audioURL} className="w-full" />
                    <a href={audioURL} download="recording.webm" className="block mt-2 text-blue-600">Download</a>
                </div>
            )}
            {transcript && (
                <p className="mt-4 p-3 bg-gray-50 rounded shadow text-center">Transcription: {transcript}</p>
            )}
        </div>
    </div>
    
    );
};

export default VoiceListner;