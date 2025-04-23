
import React, { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import { Input } from "@/components/ui/input";
import TitleDescription from "@/components/TitleDescription";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Import specific icons for testing
import { 
  Search, Copy, Check, // UI
  Home, Settings, User, Bell, Mail, // Common
  ArrowRight, ArrowLeft, ChevronDown, ChevronUp, // Arrows
  FileText, Folder, Save, Trash, // Files
  Play, Pause, Volume, Image, // Media
  Cloud, Sun, Moon, Umbrella, // Weather
  Smartphone, Laptop, Monitor, Printer // Devices
} from "lucide-react";

// Import Material Icons (Outline variants)
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import TabletOutlinedIcon from '@mui/icons-material/TabletOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';

// Material Icons mapping
const materialIconsMap: Record<string, React.ReactElement> = {
  add: <AddOutlinedIcon />,
  delete: <DeleteOutlineOutlinedIcon />,
  edit: <EditOutlinedIcon />,
  favorite: <FavoriteBorderOutlinedIcon />,
  search: <SearchOutlinedIcon />,
  settings: <SettingsOutlinedIcon />,
  download: <DownloadOutlinedIcon />,
  upload: <FileUploadOutlinedIcon />,
  
  arrow_back: <ArrowBackOutlinedIcon />,
  arrow_forward: <ArrowForwardOutlinedIcon />,
  menu: <MenuOutlinedIcon />,
  more_vert: <MoreVertOutlinedIcon />,
  close: <CloseOutlinedIcon />,
  chevron_left: <ChevronLeftOutlinedIcon />,
  chevron_right: <ChevronRightOutlinedIcon />,
  home: <HomeOutlinedIcon />,
  
  email: <EmailOutlinedIcon />,
  message: <MessageOutlinedIcon />,
  chat: <ChatOutlinedIcon />,
  call: <CallOutlinedIcon />,
  videocam: <VideocamOutlinedIcon />,
  share: <ShareOutlinedIcon />,
  send: <SendOutlinedIcon />,
  notifications: <NotificationsNoneOutlinedIcon />,
  
  description: <DescriptionOutlinedIcon />,
  image: <ImageOutlinedIcon />,
  video_library: <VideoLibraryOutlinedIcon />,
  audiotrack: <AudiotrackOutlinedIcon />,
  folder: <FolderOutlinedIcon />,
  cloud: <CloudOutlinedIcon />,
  attachment: <AttachmentOutlinedIcon />,
  link: <LinkOutlinedIcon />,
  
  smartphone: <SmartphoneOutlinedIcon />,
  tablet: <TabletOutlinedIcon />,
  laptop: <LaptopOutlinedIcon />,
  desktop_windows: <DesktopWindowsOutlinedIcon />,
  tv: <TvOutlinedIcon />,
  watch: <WatchOutlinedIcon />,
  headset: <HeadsetOutlinedIcon />,
  keyboard: <KeyboardOutlinedIcon />,
};

// Material Icon component
const MaterialIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const icon = materialIconsMap[name];
  if (!icon) return null;
  
  return React.cloneElement(icon, {
    className: `h-5 w-5 ${className}`,
  });
};

// Define our icon categories and the icons for each category
type IconCategory = {
  name: string;
  description: string;
  icons: { name: string; component: React.ComponentType<any> }[];
};

// Create categories with explicitly imported icons
const iconCategories: IconCategory[] = [
  {
    name: "Common",
    description: "Frequently used interface icons",
    icons: [
      { name: "Home", component: Home },
      { name: "Settings", component: Settings },
      { name: "User", component: User },
      { name: "Bell", component: Bell },
      { name: "Mail", component: Mail },
      { name: "Search", component: Search },
    ]
  },
  {
    name: "Arrows",
    description: "Directional and navigation icons",
    icons: [
      { name: "ArrowRight", component: ArrowRight },
      { name: "ArrowLeft", component: ArrowLeft },
      { name: "ChevronDown", component: ChevronDown },
      { name: "ChevronUp", component: ChevronUp },
    ]
  },
  {
    name: "Files",
    description: "Document and file management icons",
    icons: [
      { name: "FileText", component: FileText },
      { name: "Folder", component: Folder },
      { name: "Save", component: Save },
      { name: "Trash", component: Trash },
    ]
  },
  {
    name: "Media",
    description: "Audio, video, and image icons",
    icons: [
      { name: "Play", component: Play },
      { name: "Pause", component: Pause },
      { name: "Volume", component: Volume },
      { name: "Image", component: Image },
    ]
  },
  {
    name: "Weather",
    description: "Weather and climate icons",
    icons: [
      { name: "Cloud", component: Cloud },
      { name: "Sun", component: Sun },
      { name: "Moon", component: Moon },
      { name: "Umbrella", component: Umbrella },
    ]
  },
  {
    name: "Devices",
    description: "Hardware and device icons",
    icons: [
      { name: "Smartphone", component: Smartphone },
      { name: "Laptop", component: Laptop },
      { name: "Monitor", component: Monitor },
      { name: "Printer", component: Printer },
    ]
  },
];

// Create a flat list of all icons for search functionality
const allIcons = iconCategories.flatMap(category => category.icons);

// Define Material Icons categories and icons
const materialIconCategories = [
  {
    name: "Actions",
    description: "Icons representing common actions and tasks",
    icons: [
      { name: "Add", id: "add" },
      { name: "Delete", id: "delete" },
      { name: "Edit", id: "edit" },
      { name: "Favorite", id: "favorite" },
      { name: "Search", id: "search" },
      { name: "Settings", id: "settings" },
      { name: "Download", id: "download" },
      { name: "Upload", id: "upload" },
    ]
  },
  {
    name: "Navigation",
    description: "Icons for navigation and directional actions",
    icons: [
      { name: "Arrow Back", id: "arrow_back" },
      { name: "Arrow Forward", id: "arrow_forward" },
      { name: "Menu", id: "menu" },
      { name: "More Vert", id: "more_vert" },
      { name: "Close", id: "close" },
      { name: "Chevron Left", id: "chevron_left" },
      { name: "Chevron Right", id: "chevron_right" },
      { name: "Home", id: "home" },
    ]
  },
  {
    name: "Communication",
    description: "Icons related to communication and messaging",
    icons: [
      { name: "Email", id: "email" },
      { name: "Message", id: "message" },
      { name: "Chat", id: "chat" },
      { name: "Call", id: "call" },
      { name: "Video Call", id: "videocam" },
      { name: "Share", id: "share" },
      { name: "Send", id: "send" },
      { name: "Notifications", id: "notifications" },
    ]
  },
  {
    name: "Content",
    description: "Icons for content and file types",
    icons: [
      { name: "Description", id: "description" },
      { name: "Image", id: "image" },
      { name: "Video", id: "video_library" },
      { name: "Audio", id: "audiotrack" },
      { name: "Folder", id: "folder" },
      { name: "Cloud", id: "cloud" },
      { name: "Attachment", id: "attachment" },
      { name: "Link", id: "link" },
    ]
  },
  {
    name: "Device",
    description: "Icons representing devices and hardware",
    icons: [
      { name: "Smartphone", id: "smartphone" },
      { name: "Tablet", id: "tablet" },
      { name: "Laptop", id: "laptop" },
      { name: "Desktop", id: "desktop_windows" },
      { name: "TV", id: "tv" },
      { name: "Watch", id: "watch" },
      { name: "Headset", id: "headset" },
      { name: "Keyboard", id: "keyboard" },
    ]
  },
];

// Create a flat list of all Material icons for search functionality
const allMaterialIcons = materialIconCategories.flatMap(category => category.icons);

const Iconography = () => {
  // Lucide Icons state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  
  // Material Icons state
  const [materialSearchQuery, setMaterialSearchQuery] = useState("");
  const [activeMaterialCategory, setActiveMaterialCategory] = useState("All");
  const [copiedMaterialIcon, setCopiedMaterialIcon] = useState<string | null>(null);
  
  const { toast } = useToast();

  // Filter Lucide icons based on search query and active category
  const filteredIcons = allIcons.filter(icon => {
    // Filter by category if not "All"
    const categoryMatch = activeCategory === "All" || 
      iconCategories.find(cat => cat.name === activeCategory)?.icons.some(i => i.name === icon.name);
    
    // Filter by search query
    const searchMatch = searchQuery.trim() === "" || 
      icon.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Filter Material icons based on search query and active category
  const filteredMaterialIcons = allMaterialIcons.filter(icon => {
    // Filter by category if not "All"
    const categoryMatch = activeMaterialCategory === "All" || 
      materialIconCategories.find(cat => cat.name === activeMaterialCategory)?.icons.some(i => i.id === icon.id);
    
    // Filter by search query
    const searchMatch = materialSearchQuery.trim() === "" || 
      icon.name.toLowerCase().includes(materialSearchQuery.toLowerCase()) || 
      icon.id.toLowerCase().includes(materialSearchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Copy Lucide icon import statement to clipboard
  const copyToClipboard = (iconName: string) => {
    const importStatement = `import { ${iconName} } from 'lucide-react'`;
    navigator.clipboard.writeText(importStatement);
    setCopiedIcon(iconName);
    
    toast({
      title: "Copied to clipboard",
      description: importStatement,
      duration: 2000,
    });
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };
  
  // Copy Material icon import statement to clipboard
  const copyMaterialIconToClipboard = (iconId: string, iconName: string) => {
    const formattedName = `${iconName.replace(/ /g, '')}OutlinedIcon`;
    const importStatement = `import { ${formattedName} } from '@mui/icons-material'`;
    navigator.clipboard.writeText(importStatement);
    setCopiedMaterialIcon(iconId);
    
    toast({
      title: "Copied to clipboard",
      description: importStatement,
      duration: 2000,
    });
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedMaterialIcon(null);
    }, 2000);
  };

  return (
    <AppShell>
      <TitleDescription
        title="Iconography"
        description="Browse and search Lucide icons available for use in your application."
        titleSize="h1"
      />
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Icon Libraries</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="lucide" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="lucide" className="flex-1">Lucide Icons</TabsTrigger>
              <TabsTrigger value="material" className="flex-1">Material Icons</TabsTrigger>
            </TabsList>

            {/* Lucide Icons Tab */}
            <TabsContent value="lucide" className="mt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="relative w-full max-w-xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    className="pl-9 h-11"
                    placeholder="Search icons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    {allIcons.length} Total Icons
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    {filteredIcons.length} Results
                  </Badge>
                </div>
              </div>
              
              <Tabs defaultValue="All" onValueChange={setActiveCategory}>
                <TabsList className="mb-6 flex flex-wrap h-auto">
                  <TabsTrigger value="All" className="mb-1">All</TabsTrigger>
                  {iconCategories.map(category => (
                    <TabsTrigger key={category.name} value={category.name} className="mb-1">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="All" className="mt-0">
                  <p className="text-sm text-muted-foreground mb-6">
                    All available Lucide icons in this collection
                  </p>
                  
                  {filteredIcons.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                      {filteredIcons.map((icon) => {
                        const IconComponent = icon.component;
                        const isCopied = copiedIcon === icon.name;
                        
                        return (
                          <div
                            key={icon.name}
                            className="flex flex-col items-center justify-center p-4 rounded-lg border hover:border-primary hover:bg-accent/20 transition-all cursor-pointer relative group"
                            onClick={() => copyToClipboard(icon.name)}
                            title={`Click to copy: import { ${icon.name} } from 'lucide-react'`}
                          >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {isCopied ? (
                                <Check className="h-3.5 w-3.5 text-success" />
                              ) : (
                                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="p-2 rounded-md bg-background border mb-3 flex items-center justify-center w-10 h-10">
                              <IconComponent size={20} />
                            </div>
                            <p className="text-xs text-center font-medium truncate w-full">
                              {icon.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12 border border-dashed rounded-lg">
                      <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-4" />
                      <p className="text-muted-foreground">No icons found matching "{searchQuery}"</p>
                    </div>
                  )}
                </TabsContent>
                
                {iconCategories.map(category => (
                  <TabsContent key={category.name} value={category.name} className="mt-0">
                    <p className="text-sm text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                      {category.icons.map((icon) => {
                        const IconComponent = icon.component;
                        const isCopied = copiedIcon === icon.name;
                        
                        return (
                          <div
                            key={icon.name}
                            className="flex flex-col items-center justify-center p-4 rounded-lg border hover:border-primary hover:bg-accent/20 transition-all cursor-pointer relative group"
                            onClick={() => copyToClipboard(icon.name)}
                            title={`Click to copy: import { ${icon.name} } from 'lucide-react'`}
                          >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {isCopied ? (
                                <Check className="h-3.5 w-3.5 text-success" />
                              ) : (
                                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="p-2 rounded-md bg-background border mb-3 flex items-center justify-center w-10 h-10">
                              <IconComponent size={20} />
                            </div>
                            <p className="text-xs text-center font-medium truncate w-full">
                              {icon.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-muted-foreground">
                  See full list here{" "}
                  <a 
                    href="https://lucide.dev/icons/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://lucide.dev/icons/
                  </a>
                </p>
              </div>
            </TabsContent>

            {/* Material Icons Tab */}
            <TabsContent value="material" className="mt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="relative w-full max-w-xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    className="pl-9 h-11"
                    placeholder="Search Material icons..."
                    value={materialSearchQuery}
                    onChange={(e) => setMaterialSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="px-3 py-1">
                    {allMaterialIcons.length} Total Icons
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    {filteredMaterialIcons.length} Results
                  </Badge>
                </div>
              </div>
              
              <Tabs defaultValue="All" onValueChange={setActiveMaterialCategory}>
                <TabsList className="mb-6 flex flex-wrap h-auto">
                  <TabsTrigger value="All" className="mb-1">All</TabsTrigger>
                  {materialIconCategories.map(category => (
                    <TabsTrigger key={category.name} value={category.name} className="mb-1">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="All" className="mt-0">
                  <p className="text-sm text-muted-foreground mb-6">
                    All available Material Design icons in this collection
                  </p>
                  
                  {filteredMaterialIcons.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                      {filteredMaterialIcons.map((icon) => {
                        const isCopied = copiedMaterialIcon === icon.id;
                        
                        return (
                          <div
                            key={icon.id}
                            className="flex flex-col items-center justify-center p-4 rounded-lg border hover:border-primary hover:bg-accent/20 transition-all cursor-pointer relative group"
                            onClick={() => copyMaterialIconToClipboard(icon.id, icon.name)}
                            title={`Click to copy: import { ${icon.name.replace(/ /g, '')}OutlinedIcon } from '@mui/icons-material'`}
                          >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {isCopied ? (
                                <Check className="h-3.5 w-3.5 text-success" />
                              ) : (
                                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="p-2 rounded-md bg-background border mb-3 flex items-center justify-center w-10 h-10">
                              <MaterialIcon name={icon.id} />
                            </div>
                            <p className="text-xs text-center font-medium truncate w-full">
                              {icon.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12 border border-dashed rounded-lg">
                      <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-4" />
                      <p className="text-muted-foreground">No icons found matching "{materialSearchQuery}"</p>
                    </div>
                  )}
                </TabsContent>
                
                {materialIconCategories.map(category => (
                  <TabsContent key={category.name} value={category.name} className="mt-0">
                    <p className="text-sm text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                      {category.icons.map((icon) => {
                        const isCopied = copiedMaterialIcon === icon.id;
                        
                        return (
                          <div
                            key={icon.id}
                            className="flex flex-col items-center justify-center p-4 rounded-lg border hover:border-primary hover:bg-accent/20 transition-all cursor-pointer relative group"
                            onClick={() => copyMaterialIconToClipboard(icon.id, icon.name)}
                            title={`Click to copy: import { ${icon.name.replace(/ /g, '')}OutlinedIcon } from '@mui/icons-material'`}
                          >
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              {isCopied ? (
                                <Check className="h-3.5 w-3.5 text-success" />
                              ) : (
                                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="p-2 rounded-md bg-background border mb-3 flex items-center justify-center w-10 h-10">
                              <MaterialIcon name={icon.id} />
                            </div>
                            <p className="text-xs text-center font-medium truncate w-full">
                              {icon.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-muted-foreground">
                  See full list here{" "}
                  <a 
                    href="https://fonts.google.com/icons" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://fonts.google.com/icons
                  </a>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </AppShell>
  );
};

export default Iconography;
