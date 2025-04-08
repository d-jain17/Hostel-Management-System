import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [inputs, setInputs] = useState({
    student: { email: "", password: "" },
    warden: { email: "", password: "" },
    maintenance: { email: "", password: "" },
  });

  const changeHandler = (e, role) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [role]: { ...inputs[role], [name]: value },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Tabs defaultValue="student" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="student" className="cursor-pointer">
            Student
          </TabsTrigger>
          <TabsTrigger value="warden" className="cursor-pointer">
            Warden
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="cursor-pointer">
            Maintenance
          </TabsTrigger>
        </TabsList>

        {/* Student Login */}
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student Login</CardTitle>
              <CardDescription>
                Login as a student using your credentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={inputs.student.email}
                  onChange={(e) => changeHandler(e, "student")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={inputs.student.password}
                  onChange={(e) => changeHandler(e, "student")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Warden Login */}
        <TabsContent value="warden">
          <Card>
            <CardHeader>
              <CardTitle>Warden Login</CardTitle>
              <CardDescription>
                Login as a warden using your credentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={inputs.warden.email}
                  onChange={(e) => changeHandler(e, "warden")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={inputs.warden.password}
                  onChange={(e) => changeHandler(e, "warden")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Maintenance Staff Login */}
        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Staff Login</CardTitle>
              <CardDescription>
                Login as a maintenance staff member using your credentials.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={inputs.maintenance.email}
                  onChange={(e) => changeHandler(e, "maintenance")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={inputs.maintenance.password}
                  onChange={(e) => changeHandler(e, "maintenance")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
