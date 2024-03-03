
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
        linkedinURL: ""
    },
    {
        name: "Jeff Cunningham",
        role: "Electrical Chief",
        major: "Electrical Engineering",
    }
]

const Aerodynamics: Member[] = [
    {
        name: "Phillip Bertschy",
        role: "Aerodynamics Lead",
        major: "Mechanical Engineering",
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Brody Hesseltine",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Luke Smith",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Anirudh Tummalapalli",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
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
    },
    {
        name: "Julian Tan",
        role: "Battery Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Andrew Lafferty",
        role: "Battery Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Jesus Ramos",
        role: "Battery Engineer",
        major: "Mechatronics Engineering",
    }
]

const Chassis: Member[] = [
    {
        name: "Caleb Miller",
        role: "Chassis Lead",
        major: "Mechanical Engineering",
    },
    {
        name: "Jonathan Lozano",
        role: "Chassis Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Jose Cruz",
        role: "Chassis Engineer",
        major: "Mechanical Engineering",
    }
]

const Electronics: Member[] = [
    {
        name: "Jacinto Rodriguez Shahin",
        role: "Electronics Lead",
        major: "Electrical Engineering",
    },
    {
        name: "Joshua Wu",
        role: "Electronics Engineer",
        major: "Computer Engineering",
    },
    {
        name: "Giosef Hernandez",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
    },
    {
        name: "Blake Kruse",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
    },
    {
        name: "Praneeth Boddu",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
    },
    {
        name: "Adrian Rojas",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
    }
]

const Powertrain: Member[] = [
    {
        name: "Adan Corral",
        role: "Powertrain Lead",
        major: "Mechanical Engineering",
    },
    {
        name: "Nick Martin",
        role: "Powertrain Engineer",
        major: "Electrical Engineering",
    },
    {
        name: "Luis Diaz",
        role: "Powertrain Engineer",
        major: "Electrical Engineering",
    },
    {
        name: "Robert Haefner",
        role: "Powertrain Engineer",
        major: "Mechanical Engineering",
    }
    
    
]

const Suspension: Member[] = [
    {
        name: "Joseph Weaver",
        role: "Suspension Lead",
        major: "Mechanical Engineering",
    },
    {
        name: "Mark Cheek",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "Brendan Wyatt",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
    },
    {
        name: "David Castro",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
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