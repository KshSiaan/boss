import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <Card className="w-full mx-auto bg-white shadow-sm">
      <CardContent className="flex flex-col items-center space-y-3">
        {/* Profile Image */}
        <div
          className="h-48 w-full bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url('/image/jobs.jpg')` }}
        ></div>
        <div className="flex justify-between items-start w-full">
          {/* Name and Verification */}
          <div className="">
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-gray-900 text-sm">Tom Roe</h3>
              <CheckCircle className="w-4 h-4 text-blue-500" />
            </div>

            {/* Role */}
            <p className="text-xs text-gray-600 text-center">
              Frontend | Automation
            </p>
          </div>

          {/* Hourly Rate */}
          <div className="text-lg font-bold text-green-600">$59/hr</div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-gray-500 w-full">
          <MapPin className="w-3 h-3" />
          <span>Birmingham</span>
        </div>

        {/* Hire Button */}
        <Button
          variant="outline"
          size="lg"
          className="w-full mt-2 font-medium bg-transparent"
          asChild
        >
          <Link href="/dashboard/jobs/hire">HIRE</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
