import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useState } from "react";

const LiveBanner = () => {
  // Change this to true when going live, false when not
  const isLive = true; // <-- CHANGE THIS TO TRUE WHEN LIVE
  
  const [isVisible, setIsVisible] = useState(isLive);

  if (!isVisible) return null;

  return (
    <div>
      {/* Live Banner */}
      <div className="bg-red-600 text-white py-3 px-4 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm uppercase tracking-wide">LIVE NOW</span>
            </div>
            <span className="hidden sm:inline text-sm">
              Join our worship service streaming live
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={() => window.open('https://youtube.com/@your-channel', '_blank')}
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Live
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* YouTube Live Stream */}
      <div className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/live_stream?channel=UC_YOUR_CHANNEL_ID"
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;