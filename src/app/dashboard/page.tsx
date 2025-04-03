import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Vote } from "lucide-react";
import { Navbar } from "@/components/navbar-component";

// Dummy data (replace with backend data)
const profile = {
  name: "John Doe",
  voterId: "123456789",
  address: "123 Main St, Anytown, USA",
  constituency: "Anytown",
  state: "California",
  phoneNo: "555-1234",
  registered: true,
};

const elections = [
  {
    title: "General Election 2023",
    description:
      "This is the general election for the year 2023. Make sure to vote!",
  },
  {
    title: "Local Council Election 2023",
    description: "Vote for your local council representatives.",
  },
  {
    title: "Referendum 2023",
    description: "Participate in the referendum to decide on important issues.",
  },
];

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1 border border-muted shadow-sm">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted mb-4">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg">{profile.name}</CardTitle>
              <CardDescription className="mt-1 text-sm text-muted-foreground">
                <Badge variant={profile.registered ? "default" : "secondary"}>
                  {profile.registered ? "Registered" : "Not Registered"}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span className="font-medium text-foreground">Voter ID:</span>
                <span>{profile.voterId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-foreground">Address:</span>
                <span>{profile.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-foreground">
                  Constituency:
                </span>
                <span>{profile.constituency}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-foreground">State:</span>
                <span>{profile.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-foreground">Phone No.:</span>
                <span>{profile.phoneNo}</span>
              </div>
            </CardContent>
          </Card>

          {/* Elections Section */}
          <div className="md:col-span-2 space-y-4">
            {elections.map((election, index) => (
              <Card key={index} className="border border-muted shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <Vote className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      {election.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {election.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
