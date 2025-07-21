import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Phone, PhoneCall, X, Volume2, VolumeX } from 'lucide-react';

export const VoiceAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [callDuration, setCallDuration] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Format call duration
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start call timer
  useEffect(() => {
    if (isCallActive) {
      intervalRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCallDuration(0);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCallActive]);

  // Simulate audio level animation
  useEffect(() => {
    if (isRecording || isCallActive) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setAudioLevel(0);
    }
  }, [isRecording, isCallActive]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.start();
      setIsRecording(true);
      
      mediaRecorder.ondataavailable = (event) => {
        // Handle audio data here
        console.log('Audio data available:', event.data);
      };
      
      mediaRecorder.onstop = () => {
        setIsRecording(false);
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      };
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  const toggleCall = () => {
    if (isCallActive) {
      setIsCallActive(false);
      setIsRecording(false);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    } else {
      setIsCallActive(true);
      startRecording();
    }
  };

  const closeWidget = () => {
    setIsOpen(false);
    if (isCallActive) {
      toggleCall();
    }
    if (isRecording) {
      stopRecording();
    }
  };

  return (
    <>
      {/* Main floating button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] animate-pulse opacity-30"></div>
            
            {/* Icon */}
            <Mic className="w-7 h-7 text-white relative z-10" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Voice AI Assistant
            </div>
          </button>
        </div>
      )}

      {/* Expanded widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 w-80 max-w-[calc(100vw-3rem)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    Voice AI Assistant
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isCallActive ? `Call active • ${formatDuration(callDuration)}` : 'Ready to help'}
                  </p>
                </div>
              </div>
              <button
                onClick={closeWidget}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                {/* Audio visualization */}
                <div className="flex items-center gap-1 h-12">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-[#2563eb] to-[#38b6ff] rounded-full transition-all duration-150"
                      style={{
                        height: `${(isRecording || isCallActive) ? Math.random() * 40 + 10 : 4}px`,
                        opacity: (isRecording || isCallActive) ? 0.7 + Math.random() * 0.3 : 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {/* Call button */}
              <button
                onClick={toggleCall}
                className={`p-4 rounded-full transition-all duration-300 ${
                  isCallActive
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isCallActive ? <PhoneCall className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
              </button>

              {/* Record button */}
              {!isCallActive && (
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isRecording
                      ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>
              )}

              {/* Mute button (only during call) */}
              {isCallActive && (
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isMuted
                      ? 'bg-gray-500 hover:bg-gray-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              )}
            </div>

            {/* Status text */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                {isCallActive
                  ? isMuted
                    ? 'Call muted'
                    : 'Listening...'
                  : isRecording
                  ? 'Recording your message...'
                  : 'Tap call to start voice conversation'}
              </p>
            </div>

            {/* Quick actions */}
            {!isCallActive && !isRecording && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors font-medium">
                  Quick Help
                </button>
                <button className="p-2 text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors font-medium">
                  Voice Commands
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}; 