import React from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
`;

const GreenButton = styled(StyledButton)`
  background-color: #00b386;
  color: white;
`;

const OrangeButton = styled(StyledButton)`
  background-color: #ff9800;
  color: white;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #8b4513;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const Checkmark = styled.span`
  color: white;
  font-size: 48px;
`;

function PolicyCreatedAlert() {
  const showPolicyCreatedAlert = () => {
    Swal.fire({
      title: 'Your Policy has been created successfully',
      html: (
        <div>
          <SuccessIcon>
            <Checkmark>✓</Checkmark>
          </SuccessIcon>
          <GreenButton>Print E-Cover Note</GreenButton>
          <OrangeButton>Print Certificate</OrangeButton>
        </div>
      ),
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      allowOutsideClick: false, // Prevent closing on outside click
      allowEscapeKey: false,    // Prevent closing on ESC key
    });
  };

  return (
    <div>
      <button onClick={showPolicyCreatedAlert}>Show Policy Created Alert</button>
    </div>
  );
}

export default PolicyCreatedAlert;