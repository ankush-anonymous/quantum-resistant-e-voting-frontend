import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Vote } from "lucide-react"; // Assuming Lucide icons are installed
import { Navbar } from "@/components/navbar-component";

// Dummy profile data (replace with dynamic data from backend)
const profile = {
  name: "John Doe",
  voterId: "123456789",
  address: "123 Main St, Anytown, USA",
  constituency: "Anytown",
  state: "California",
  phoneNo: "555-1234",
  registered: true,
};

// Dummy election data (replace with dynamic data from backend)
const elections = [
  {
    title: "General Election 2023",
    description: "This is the general election for the year 2023. Make sure to vote!",
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
    <Navbar/>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Profile Card */}
        <Card className="md:col-span-1 flex flex-col w-full max-w-xs mx-auto">
  <CardHeader className="flex flex-col items-center">
    <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mb-4">
      <User className="w-12 h-12 text-gray-600" />
    </div>
    <CardTitle className="text-center">{profile.name}</CardTitle>
    <CardDescription className="mt-2">
      <Badge variant={profile.registered ? "default" : "secondary"}>
        {profile.registered ? "Registered" : "Not Registered"}
      </Badge>
    </CardDescription>
  </CardHeader>
  <CardContent className="flex-grow pt-6">
    <dl className="space-y-4">
      <div className="flex justify-between">
        <dt className="text-sm font-medium">Voter ID</dt>
        <dd className="text-sm">{profile.voterId}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-sm font-medium">Address</dt>
        <dd className="text-sm">{profile.address}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-sm font-medium">Constituency</dt>
        <dd className="text-sm">{profile.constituency}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-sm font-medium">State</dt>
        <dd className="text-sm">{profile.state}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-sm font-medium">Phone No.</dt>
        <dd className="text-sm">{profile.phoneNo}</dd>
      </div>
    </dl>
  </CardContent>
</Card>
        {/* Elections Section */}
        <div className="md:col-span-2 grid grid-cols-1 gap-4">
          {elections.map((election, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Vote className="w-6 h-6 text-gray-600" />
                  <CardTitle>{election.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{election.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardPage;