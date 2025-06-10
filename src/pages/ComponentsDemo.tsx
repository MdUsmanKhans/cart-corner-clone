
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { useToast } from '@/hooks/use-toast';
import { Calendar, ChevronDown, Heart, Settings, User, ShoppingCart, Star, Plus } from 'lucide-react';

const ComponentsDemo = () => {
  const [progressValue, setProgressValue] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Success!",
      description: "This is a demo toast notification.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">UI Components Demo</h1>
          <p className="text-muted-foreground mb-4">
            This page showcases all the UI components available in the application.
          </p>
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="grid gap-8">
          {/* Buttons & Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons & Badges</CardTitle>
              <CardDescription>Various button styles and badge variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button onClick={showToast}>Show Toast</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Form Components */}
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>Input fields, selects, and form controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>

              <div className="space-y-2">
                <Label>Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Preferences</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Plan</Label>
                <RadioGroup defaultValue="pro">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free">Free</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro" />
                    <Label htmlFor="pro">Pro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise">Enterprise</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Sliders & Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Sliders & Progress</CardTitle>
              <CardDescription>Interactive controls and progress indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Volume: {sliderValue[0]}%</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-[60%]"
                />
              </div>
              <div className="space-y-2">
                <Label>Progress: {progressValue}%</Label>
                <Progress value={progressValue} className="w-[60%]" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgressValue(Math.max(0, progressValue - 10))}>
                    Decrease
                  </Button>
                  <Button size="sm" onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>
                    Increase
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Components */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation Components</CardTitle>
              <CardDescription>Menus, dropdowns, and navigation elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Dropdown <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Settings</h4>
                        <p className="text-sm text-muted-foreground">
                          Configure your preferences here.
                        </p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New File</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Save</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Tabbed content organization</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences here.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Change your password and security settings.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Configure application settings and preferences.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Collapsible content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Getting Started</AccordionTrigger>
                  <AccordionContent>
                    Learn the basics of using our platform with our comprehensive getting started guide.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Advanced Features</AccordionTrigger>
                  <AccordionContent>
                    Discover powerful features that can help you get the most out of our platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Troubleshooting</AccordionTrigger>
                  <AccordionContent>
                    Find solutions to common issues and learn how to resolve them quickly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>Data table with sorting and filtering</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">iPhone 15 Pro</TableCell>
                    <TableCell>Electronics</TableCell>
                    <TableCell>$999</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">4.8</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">MacBook Air M2</TableCell>
                    <TableCell>Electronics</TableCell>
                    <TableCell>$1,199</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">4.9</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sony WH-1000XM5</TableCell>
                    <TableCell>Electronics</TableCell>
                    <TableCell>$399</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">4.7</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Dialogs & Sheets */}
          <Card>
            <CardHeader>
              <CardTitle>Dialogs & Sheets</CardTitle>
              <CardDescription>Modal dialogs and sliding panels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog description. You can put any content here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Dialog content goes here...</p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet Title</SheetTitle>
                      <SheetDescription>
                        This is a sheet panel that slides in from the side.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <p>Sheet content goes here...</p>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </CardContent>
          </Card>

          {/* Hover Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Hover Cards</CardTitle>
              <CardDescription>Rich content on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@username</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@username</h4>
                      <p className="text-sm">
                        Frontend developer and UI/UX enthusiast. Building beautiful interfaces.
                      </p>
                      <div className="flex items-center pt-2">
                        <Calendar className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComponentsDemo;
