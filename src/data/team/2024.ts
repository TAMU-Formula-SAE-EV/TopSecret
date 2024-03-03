
interface Member {
    name: string
    role?: string
    linkedinURL?: string
    major: string
    bio?: string
}

const Leads: Member[] = [
    {
        name: "Gerry Mullins",
        role: "Project Manager",
        major: "Mechatronics, Robotics, and Automation Engineering",
        bio: "I am a Senior Mechatronics Student at Texas A&M. I am looking to get involved with impactful, fast-paced projects in the mechanical or electrical fields.",
        linkedinURL: "https://www.linkedin.com/in/gerrymullins/"
    },
    {
        name: "Ethan Reich",
        role: "Mechanical Chief",
        major: "Mechanical Engineering",
    },
    {
        name: "Jeff Cunningham",
        role: "Electrical Chief",
        major: "Electrical Engineering",
    }
]

const Aerodynamics: Member[] = [
    {
        name: "Phillip Bsomething",
        role: "Aerodynamics Lead",
        major: "Aerospace Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Engineer",
        major: "Aerospace Engineering",
    }
]

const Battery: Member[] = [
    {
        name: "Alan Yan",
        role: "Battery Lead",
        major: "Mechanical Engineering",
    },
    {
        name: "Raaj Patel",
        role: "Battery Engineer",
        major: "Electrical Engineering",
    }
]

const Chassis: Member[] = [
    {
        name: "Phillip Bsomething",
        role: "Aerodynamics Lead",
        major: "Aerospace Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Member",
        major: "Aerospace Engineering",
    }
]

const Electronics: Member[] = [
    {
        name: "Phillip Bsomething",
        role: "Aerodynamics Lead",
        major: "Aerospace Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Member",
        major: "Aerospace Engineering",
    }
]

const Powertrain: Member[] = [
    {
        name: "Phillip Bsomething",
        role: "Aerodynamics Lead",
        major: "Aerospace Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Member",
        major: "Aerospace Engineering",
    }
]

const Suspension: Member[] = [
    {
        name: "Phillip Bsomething",
        role: "Aerodynamics Lead",
        major: "Aerospace Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Member",
        major: "Aerospace Engineering",
    }
]

export const FullTeam: {
    Leads: Member[],
    Aerodynamics: Member[],
    Battery: Member[],
    Chassis: Member[],
    Electronics: Member[],
    Powertrain: Member[],
    Suspension: Member[]
} = {
    Leads: Leads,
    Aerodynamics: Aerodynamics,
    Battery: Battery,
    Chassis: Chassis,
    Electronics: Electronics,
    Powertrain: Powertrain,
    Suspension: Suspension

}