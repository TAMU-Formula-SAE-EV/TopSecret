
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
        linkedinURL: "https://www.linkedin.com/in/ethanreich25/"
    },
    {
        name: "Jeff Cunningham",
        role: "Electrical Chief",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/j-cunningham/"
    }
]

const Aerodynamics: Member[] = [
    {
        name: "Phillip Bertschy",
        role: "Aerodynamics Lead",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/p-bertschy/"
    },
    {
        name: "Dennis Tan",
        role: "Aerodynamics Engineer",
        major: "Aerospace Engineering",
        linkedinURL: "https://www.linkedin.com/in/dennis-tan-91295a53/"
    },
    {
        name: "Brody Hesseltine",
        role: "Aerodynamics Engineer",
        major: "Aerospace Engineering",
        linkedinURL: "https://www.linkedin.com/in/brodyhesseltine/"
    },
    {
        name: "Luke Smith",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/luke-smith2024/"
    },
    {
        name: "Anirudh Tummalapalli",
        role: "Aerodynamics Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/ani-tummalapalli/"
    }
]

const Battery: Member[] = [
    {
        name: "Alan Yan",
        role: "Battery Lead",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/alanyan8/"
    },
    {
        name: "Raaj Patel",
        role: "Battery Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/raajtpatel/"
    },
    {
        name: "Julian Tan",
        role: "Battery Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/julian--tan/"
    },
    {
        name: "Andrew Lafferty",
        role: "Battery Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/andrew-lafferty/"
    },
    {
        name: "Jesus Ramos",
        role: "Battery Engineer",
        major: "Mechatronics Engineering",
        linkedinURL: "https://www.linkedin.com/in/jc-ramos/"
    },
    {
        name: "Jeremy Hinton",
        role: "Battery Engineer",
        major: "Mechanical Engineering",
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
        linkedinURL: "https://www.linkedin.com/in/jonathan-lozano-a11382290/"
    },
    {
        name: "Jose Cruz",
        role: "Chassis Engineer",
        major: "Maufacturing and Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/jose-cruz-62916526b/"
    },
    {
        name: "Jireh Lagman",
        role: "Chassis Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/jirehlagman/"
    },
    {
        name: "Joshua Kraly",
        role: "Chassis Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/joshuakraly/"
    }
]

const Electronics: Member[] = [
    {
        name: "Jacinto Rodriguez Shahin",
        role: "Electronics Lead",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/jacintordzs/"
    },
    {
        name: "Joshua Wu",
        role: "Electronics Engineer",
        major: "Computer Engineering",
        linkedinURL: "https://www.linkedin.com/in/joshuawwu/"
    },
    {
        name: "Giosef Hernandez Vizcarrondo",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/giosef-hernandez-vizcarrondo-7520b3223/"
    },
    {
        name: "Blake Kruse",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/blake-kruse/"
    },
    {
        name: "Praneeth Boddu",
        role: "Electronics Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/praneeth-boddu/"
    },
    {
        name: "Adrian Rojas",
        role: "Electronics Engineer",
        major: "Electrical Engineering"
    }
]

const Powertrain: Member[] = [
    {
        name: "Adan Corral",
        role: "Powertrain Lead",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/jacorral/"
    },
    {
        name: "Nick Martin",
        role: "Powertrain Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/nicholas-martin20/"
    },
    {
        name: "Luis Diaz",
        role: "Powertrain Engineer",
        major: "Electrical Engineering",
        linkedinURL: "https://www.linkedin.com/in/luis-diaz-santini/"
    },
    {
        name: "Robert Haefner",
        role: "Powertrain Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/robert-haefner/"
    },
    {
        name: "Purav Datta",
        role: "Powertrain Engineer",
        major: "General Engineering",
        linkedinURL: "https://www.linkedin.com/in/jc-ramos/"
    }
    
    
]

const Suspension: Member[] = [
    {
        name: "Joseph Weaver",
        role: "Suspension Lead",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/jweaver96/"
    },
    {
        name: "Mark Cheek",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/mark-cheek-102b0824a/"
    },
    {
        name: "Brendan Wyatt",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/brendan-wyatt/"
    },
    {
        name: "David Castro",
        role: "Suspension Engineer",
        major: "Mechanical Engineering",
        linkedinURL: "https://www.linkedin.com/in/david-castro-tamu/"
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