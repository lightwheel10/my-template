"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("I'm a software developer passionate about creating user-friendly applications.");
  const [jobTitle, setJobTitle] = useState("Senior Software Engineer");
  const [department, setDepartment] = useState("Engineering");
  const [location, setLocation] = useState("New York, USA");
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 123-4567");
  const [birthDate, setBirthDate] = useState<Date | undefined>(new Date(1990, 0, 1));
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    // TODO: Implement actual save functionality
    console.log("Profile saved");
    setIsSaving(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <Card className="bg-white shadow">
            <CardContent className="flex flex-col items-center p-6">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button className="mb-4 bg-blue-600 text-white hover:bg-blue-700">Change Avatar</Button>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
              <p className="text-gray-600 text-center mb-4">{jobTitle}</p>
              <div className="w-full space-y-4">
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <Label htmlFor="profile-visibility" className="text-sm font-medium text-gray-700">Profile Visibility</Label>
                    <p className="text-xs text-gray-500">Allow others to see your profile</p>
                  </div>
                  <Switch
                    id="profile-visibility"
                    checked={profileVisibility}
                    onCheckedChange={setProfileVisibility}
                  />
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications" className="text-sm font-medium text-gray-700">Notifications</Label>
                    <p className="text-xs text-gray-500">Receive email notifications</p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor-auth" className="text-sm font-medium text-gray-700">Two-Factor Auth</Label>
                    <p className="text-xs text-gray-500">Enable two-factor authentication</p>
                  </div>
                  <Switch
                    id="two-factor-auth"
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-2/3">
          <Card className="bg-white shadow">
            <CardContent className="pt-6 px-6">
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 text-gray-800 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-gray-50 text-gray-800 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="bg-gray-50 text-gray-800 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-gray-700">Department</Label>
                    <Select value={department} onValueChange={setDepartment}>
                      <SelectTrigger className="bg-gray-50 text-gray-800 border-gray-300">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Sales">Sales</SelectItem>
                        <SelectItem value="HR">Human Resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-700">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-gray-50 text-gray-800 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-gray-700">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-gray-50 text-gray-800 border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700">Birth Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-gray-50 text-gray-800 border-gray-300">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {birthDate ? format(birthDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={birthDate}
                          onSelect={setBirthDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-700">Bio</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="bg-gray-50 text-gray-800 border-gray-300"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="relative bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {isSaving && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}