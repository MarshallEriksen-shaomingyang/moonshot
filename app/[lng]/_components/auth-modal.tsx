'use client';
import { useContext } from 'react';

import { SignIn } from '@clerk/nextjs';
import { Modal } from 'antd';

import { globalModalContext } from '@/provider/modal-provider';

export default function AuthModal() {
  const { open, handleModalState } = useContext(globalModalContext);
  return (
    <Modal
      open={open}
      centered
      title={null}
      onOk={handleModalState}
      onCancel={handleModalState}
      footer={null}
      closable={false}
      width={'auto'}
      styles={{
        body: { padding: 0 },
        content: { padding: 0 },
      }}
    >
      <div className="w-full mx-auto">
        <SignIn
          routing="virtual"
          withSignUp
          appearance={{
            elements: {
              formButtonPrimary: 'var(--primary-color)',
            },
          }}
        />
      </div>
    </Modal>
  );
}
