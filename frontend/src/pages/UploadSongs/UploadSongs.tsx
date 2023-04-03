import { useState, useEffect, useRef } from "react";
import fs from "fs";
//
const UploadSongs: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [base64, setBase64] = useState<string | null>(null);

  const audioElementRef = useRef<HTMLAudioElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAudioFile(event.target.files ? event.target.files[0] : null);
  };

  // type AudioElement = HTMLAudioElement & { captureStream: () => MediaStream };
  // type MyMediaRecorder = MediaRecorder & { getBlob: () => Blob };

  const handleRecord = () => {
    if (!audioElementRef.current || !audioFile) {
      return;
    }
    type AudioElement = HTMLAudioElement & { captureStream: () => MediaStream };
    const audioElement = audioElementRef.current as AudioElement;

    audioElement.src = URL.createObjectURL(audioFile);

    type MyMediaRecorder = MediaRecorder & { getBlob: () => Blob };

    const stream = audioElement.captureStream();
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: "audio/wav; codecs=pcm",
      audioBitsPerSecond: 44100 * 16 * 1, // Mono, 44100Hz, 16-bit PCM
    }) as MyMediaRecorder;

    let audioBlob: Blob | null = null;

    // Start recording and stop after 5 seconds
    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
    }, 5000);

    // Save the recorded audio to the audioBlob variable when the recording is complete
    mediaRecorder.addEventListener("stop", () => {
      audioBlob = mediaRecorder.getBlob();
    });

    // Convert the audioBlob to base64 when it is available
    if (audioBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.addEventListener("loadend", () => {
        setBase64(reader.result as string);
      });
    }
  };
  console.log(base64);
  return (
    <div className="mt-[88px] max-w-[1000px] m-auto bg-[var(--bg-3)] rounded-lg p-3 border border-[var(--border-color)] flex flex-col items-center">
      <h1 className="w-full text-center text-2xl mb-2 pb-2 border-b border-[var(--border-color)]">
        Upload your song
      </h1>
      <div className="border border-[var(--border-color)] p-2 rounded-lg">
        <form className="flex flex-col gap-2">
          <label
            htmlFor="audioUploadInput"
            className="w-full h-[40px] cursor-pointer"
          >
            <input
              type="file"
              id="audioUploadInput"
              className="hidden"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </label>
          {base64 && <audio src={base64} controls />}
          <audio ref={audioElementRef} />
          <input
            type="text"
            placeholder="Name of the Song"
            className="bg-transparent border border-[var(--border-color)] rounded-lg p-2 outline-none"
          />
        </form>
      </div>
      <button
        className="mt-2 p-2 border border-[var(--border-color)] rounded-lg cursor-pointer"
        onClick={handleRecord}
      >
        submit
      </button>
    </div>
  );
};

export default UploadSongs;
// const fileReader = new FileReader();
//                 fileReader.onload = () => {
//                   if (fileReader.readyState === 2) {
//                     setMusicUploadBase64(fileReader.result);
//                   }
//                 };
//                 fileReader.readAsDataURL(e.target.files[0]);
