import { AddDataInput } from './AddDataInput';
import { ThemeStyleInput } from "./ThemeStyleInput";
import { WidthInput } from "./WidthInput";
import { ImageTypeInput } from "./ImageTypeInput";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'

export function StyleInput() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="absolute top-0 right-0 -ml-2 mt-2">
        Output Settings
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-md pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto bg-cyan-950 relative w-screen max-w-72 md:max-w-full transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-16 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <image width={32} height={32}></image>
                    X</button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold leading-6 text-theme-text">
                      Output Settings
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <WidthInput/>
                    <ThemeStyleInput/>
                    <AddDataInput/>
                    <ImageTypeInput/>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default StyleInput;