'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export default function DefaultAlert() {
  return (
    <>
      <Alert color="info" withBorderAccent icon={HiInformationCircle}
      >
        <span>
          <p>
            <span className="font-medium">
              Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
      <Alert
        color="failure"
        withBorderAccent
        icon={HiInformationCircle}
      >
        <span>
          <p>
            <span className="font-medium">
              Info alert!
            </span>
            Change a few things up and try submitting again.
          </p>
        </span>
      </Alert>
    </>
  )
}


