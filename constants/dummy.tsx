const cleaners = [
    {
        name: "John Doe",
        mobile: "1234567890",
        city: "New York",
        state: "NY",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Jane Smith",
        mobile: "9876543210",
        city: "Los Angeles",
        state: "CA",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Michael Johnson",
        mobile: "5678901234",
        city: "Chicago",
        state: "IL",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Emily Davis",
        mobile: "3456789012",
        city: "Houston",
        state: "TX",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Daniel Wilson",
        mobile: "9012345678",
        city: "Phoenix",
        state: "AZ",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Sophia Martinez",
        mobile: "2345678901",
        city: "Miami",
        state: "FL",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    }
];

const drivers = [
    {
        name: "John Doe",
        mobile: "1234567890",
        city: "New York",
        state: "NY",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Jane Smith",
        mobile: "9876543210",
        city: "Los Angeles",
        state: "CA",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Michael Johnson",
        mobile: "5678901234",
        city: "Chicago",
        state: "IL",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Emily Davis",
        mobile: "3456789012",
        city: "Houston",
        state: "TX",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Daniel Wilson",
        mobile: "9012345678",
        city: "Phoenix",
        state: "AZ",
        type: "Part-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        name: "Sophia Martinez",
        mobile: "2345678901",
        city: "Miami",
        state: "FL",
        type: "Full-time",
        aadhar: "https://via.placeholder.com/150",
        license: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/100"
    }
];

const cars = [
    {
        vehicleNumber: "ABC123",
        seatingCapacity: "5",
        vehicleModel: "Toyota Corolla",
        location: "New York",
        carName: "Family Car",
        contactNumber: "123-456-7890",
        features: ["AC", "For Rent"],
        imageUrl: [
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FF0000",
            "https://via.placeholder.com/150/00FF00"
        ],
    },
    {
        vehicleNumber: "XYZ456",
        seatingCapacity: "7",
        vehicleModel: "Honda Odyssey",
        location: "Los Angeles",
        carName: "Mini Van",
        contactNumber: "987-654-3210",
        features: ["Non-AC", "For Sell"],
        imageUrl: [
            "https://via.placeholder.com/150/FFFF00",
            "https://via.placeholder.com/150/FF00FF",
            "https://via.placeholder.com/150/00FFFF"
        ],
    },
    {
        vehicleNumber: "LMN789",
        seatingCapacity: "4",
        vehicleModel: "Ford Mustang",
        location: "Chicago",
        carName: "Sporty Ride",
        contactNumber: "555-555-5555",
        features: ["AC", "For Sell"],
        imageUrl: [
            "https://via.placeholder.com/150/000000",
            "https://via.placeholder.com/150/808080",
            "https://via.placeholder.com/150/C0C0C0"
        ],
    },
    {
        vehicleNumber: "QWE123",
        seatingCapacity: "5",
        vehicleModel: "Chevrolet Malibu",
        location: "Houston",
        carName: "Business Sedan",
        contactNumber: "111-222-3333",
        features: ["AC", "For Rent"],
        imageUrl: [
            "https://via.placeholder.com/150/FFA500",
            "https://via.placeholder.com/150/A52A2A",
            "https://via.placeholder.com/150/8A2BE2"
        ],
    },
    {
        vehicleNumber: "RTY456",
        seatingCapacity: "8",
        vehicleModel: "Subaru Ascent",
        location: "Phoenix",
        carName: "Big Family SUV",
        contactNumber: "444-555-6666",
        features: ["Non-AC", "For Rent"],
        imageUrl: [
            "https://via.placeholder.com/150/7FFF00",
            "https://via.placeholder.com/150/D2691E",
            "https://via.placeholder.com/150/FF7F50"
        ],
    },
];

const trucks = [
    {
        vehicleNumber: "AB123CD",
        numberOfTyres: 6,
        vehicleWeight: "10 tons",
        model: "Model X",
        bodyType: "Flatbed",
        location: "New York",
        chassisNumber: "CH123456789",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/92c952",
            "https://via.placeholder.com/150/771796"
        ]
    },
    {
        vehicleNumber: "EF456GH",
        numberOfTyres: 8,
        vehicleWeight: "15 tons",
        model: "Model Y",
        bodyType: "Tanker",
        location: "Los Angeles",
        chassisNumber: "CH987654321",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/24f355",
            "https://via.placeholder.com/150/d32776"
        ]
    },
    {
        vehicleNumber: "IJ789KL",
        numberOfTyres: 10,
        vehicleWeight: "20 tons",
        model: "Model Z",
        bodyType: "Refrigerated",
        location: "Chicago",
        chassisNumber: "CH123123123",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/f66b97",
            "https://via.placeholder.com/150/56a8c2"
        ]
    },
    {
        vehicleNumber: "MN012OP",
        numberOfTyres: 12,
        vehicleWeight: "25 tons",
        model: "Model A",
        bodyType: "Dump",
        location: "Houston",
        chassisNumber: "CH321321321",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/b0f7cc",
            "https://via.placeholder.com/150/54176f"
        ]
    }
];

const buses = [
    {
        vehicleNumber: "BC234DE",
        seatingCapacity: 50,
        vehicleModel: "Model B",
        bodyType: "Coach",
        location: "San Francisco",
        chassisNumber: "CH456456456",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/66b7d2",
            "https://via.placeholder.com/150/123456"
        ]
    },
    {
        vehicleNumber: "GH567IJ",
        seatingCapacity: 60,
        vehicleModel: "Model C",
        bodyType: "Double Decker",
        location: "Miami",
        chassisNumber: "CH654654654",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/456789",
            "https://via.placeholder.com/150/abcdef"
        ]
    },
    {
        vehicleNumber: "KL890MN",
        seatingCapacity: 40,
        vehicleModel: "Model D",
        bodyType: "Minibus",
        location: "Seattle",
        chassisNumber: "CH789789789",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/fedcba",
            "https://via.placeholder.com/150/654321"
        ]
    },
    {
        vehicleNumber: "OP123QR",
        seatingCapacity: 45,
        vehicleModel: "Model E",
        bodyType: "Shuttle",
        location: "Denver",
        chassisNumber: "CH987987987",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/89abcd",
            "https://via.placeholder.com/150/ef1234"
        ]
    }
];

const tempo = [
    {
        vehicleNumber: "BC234DE",
        seatingCapacity: 50,
        vehicleModel: "Model B",
        bodyType: "Coach",
        location: "San Francisco",
        chassisNumber: "CH456456456",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/66b7d2",
            "https://via.placeholder.com/150/123456"
        ]
    },
    {
        vehicleNumber: "GH567IJ",
        seatingCapacity: 60,
        vehicleModel: "Model C",
        bodyType: "Double Decker",
        location: "Miami",
        chassisNumber: "CH654654654",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/456789",
            "https://via.placeholder.com/150/abcdef"
        ]
    },
    {
        vehicleNumber: "KL890MN",
        seatingCapacity: 40,
        vehicleModel: "Model D",
        bodyType: "Minibus",
        location: "Seattle",
        chassisNumber: "CH789789789",
        forRentOrSell: "For Rent",
        imageUrl: [
            "https://via.placeholder.com/150/fedcba",
            "https://via.placeholder.com/150/654321"
        ]
    },
    {
        vehicleNumber: "OP123QR",
        seatingCapacity: 45,
        vehicleModel: "Model E",
        bodyType: "Shuttle",
        location: "Denver",
        chassisNumber: "CH987987987",
        forRentOrSell: "For Sell",
        imageUrl: [
            "https://via.placeholder.com/150/89abcd",
            "https://via.placeholder.com/150/ef1234"
        ]
    }
];

const packageData = [
    {
        vehicleNumber: 'ABC123',
        otherVehicleNumber: 'XYZ456',
        customerName: 'John Doe',
        mobileNumber: '1234567890',
        alternateNumber: '9876543210',
        kmStarting: '1000',
        perKmRate: '10',
        advancedAmount: '5000',
        remainingAmount: '2000',
        departurePlace: 'City A',
        destinationPlace: 'City B',
        departureTime: '10:00 AM',
        returnTime: '5:00 PM',
        toll: '200',
        otherStateTax: '100',
        instructions: 'Handle with care',
        addNote: 'Please note additional instructions',
        entryParking: 'Paid parking available'
      },
      {
        vehicleNumber: 'DEF456',
        otherVehicleNumber: 'PQR789',
        customerName: 'Jane Smith',
        mobileNumber: '9876543210',
        alternateNumber: '1234567890',
        kmStarting: '1500',
        perKmRate: '12',
        advancedAmount: '6000',
        remainingAmount: '2500',
        departurePlace: 'City C',
        destinationPlace: 'City D',
        departureTime: '9:00 AM',
        returnTime: '4:00 PM',
        toll: '150',
        otherStateTax: '80',
        instructions: 'Fragile items inside',
        addNote: 'Contact on arrival',
        entryParking: 'Free parking'
      },
]

const employees = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        department: "Engineering",
        email: "john.doe@example.com",
        phone: "+1234567890",
        imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "UX/UI Designer",
        department: "Design",
        email: "jane.smith@example.com",
        phone: "+1987654321",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Johnson",
        role: "Marketing Manager",
        department: "Marketing",
        email: "michael.johnson@example.com",
        phone: "+1122334455",
        imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "HR Specialist",
        department: "Human Resources",
        email: "emily.davis@example.com",
        phone: "+1567890123",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];


export {cleaners, drivers, cars, trucks, buses, tempo, packageData, employees}