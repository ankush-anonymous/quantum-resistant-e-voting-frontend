"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  CheckCircle,
  ShieldCheck,
  Vote,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/navbar-component";

// Dummy candidate data
const candidates = [
  { id: "c1", name: "Alice Johnson", party: "Party A" },
  { id: "c2", name: "Bob Smith", party: "Party B" },
  { id: "c3", name: "Charlie Brown", party: "Party C" },
];

const steps = [
  "Candidate Selected",
  "Generating ZKP Proof",
  "Proof Generated",
  "Proof Verified",
  "Vote Casted",
];

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const castVote = () => {
    if (!selectedCandidate) return;
    let step = 0;
    const interval = setInterval(() => {
      setCurrentStep(++step);
      if (step === steps.length - 1) clearInterval(interval);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-left mb-8 text-foreground">
          🗳️ General Election 2023
        </h1>

        {/* Candidate Selection */}
        <RadioGroup
          value={selectedCandidate}
          onValueChange={setSelectedCandidate}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {candidates.map((candidate) => (
            <Card
              key={candidate.id}
              className="border border-muted shadow-sm hover:shadow-md transition-all duration-200"
            >
              <CardHeader className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-full">
                  <Vote className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{candidate.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Party: {candidate.party}
                  </p>
                </div>
                <RadioGroupItem value={candidate.id} className="ml-auto" />
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Candidate ID: {candidate.id}
              </CardContent>
            </Card>
          ))}
        </RadioGroup>

        {/* Cast Vote Button */}
        <div className="text-center mt-8">
          <Button onClick={castVote} disabled={!selectedCandidate}>
            CAST VOTE
          </Button>
        </div>

        {/* Steps Progress Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-1
                ${
                  index <= currentStep
                    ? "bg-green-500 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : index === currentStep ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs max-w-[80px]">{step}</span>
              </div>
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <ArrowRight className="mx-3 text-muted-foreground w-5 h-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VotingPage;
