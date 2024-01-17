import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


const Users = [
    {
        email: "test1@test.com",
        nickname: "test11",
        password: "gkfldh94"
    },
    {
        email: "test2@test.com",
        nickname: "test22",
        password: "gkfldh94"
    },
    {
        email: "test3@test.com",
        nickname: "test33",
        password: "gkfldh94"
    },
    {
        email: "test4@test.com",
        nickname: "test44",
        password: "gkfldh94"
    },
    {
        email: "test5@test.com",
        nickname: "test55",
        password: "gkfldh94"
    },
    {
        email: "test6@test.com",
        nickname: "test66",
        password: "gkfldh94"
    },
    {
        email: "test7@test.com",
        nickname: "test77",
        password: "gkfldh94"
    },
    {
        email: "test8@test.com",
        nickname: "test88",
        password: "gkfldh94"
    },
    {
        email: "test9@test.com",
        nickname: "test99",
        password: "gkfldh94"
    },
    {
        email: "test10@test.com",
        nickname: "test10",
        password: "gkfldh94"
    },
    {
        email: "test11@test.com",
        nickname: "test111",
        password: "gkfldh94"
    },
    {
        email: "test12@test.com",
        nickname: "test12",
        password: "gkfldh94"
    },
    {
        email: "test13@test.com",
        nickname: "test13",
        password: "gkfldh94"
    },
    {
        email: "test14@test.com",
        nickname: "test14",
        password: "gkfldh94"
    },
    {
        email: "test15@test.com",
        nickname: "test15",
        password: "gkfldh94"
    }
];

enum PRIORITY {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

const Todos = [
    {
        "title": "할일 1",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 1
    },
    {
        "title": "할일 2",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 2
    },
    {
        "title": "할일 3",
        "description": "",
        "priority": PRIORITY.MEDIUM,
        "userId": 3
    },
    {
        "title": "할일 4",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 4
    },
    {
        "title": "할일 5",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 1
    },
    {
        "title": "할일 6",
        "description": "",
        "priority": PRIORITY.MEDIUM,
        "userId": 2
    },
    {
        "title": "할일 7",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 3
    },
    {
        "title": "할일 8",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 4
    },
    {
        "title": "할일 9",
        "description": "",
        "priority": PRIORITY.LOW,
        "userId": 1
    },
    {
        "title": "할일 10",
        "description": "",
        "priority": PRIORITY.HIGH,
        "userId": 2
    },
    {
        "title": "할일 11",
        "description": "",
        "priority": PRIORITY.HIGH,
        "userId": 3
    }
]


function setExperienceOfLevel(level: number) {
    return level ** 2 + 3 * level + 2;
}

async function seedData() {
    let i = 1;
    while (i < 100) {
        const res = await prisma.level.create({
            data: {
                level: i,
                maxExperience: setExperienceOfLevel(i++),
            },
        });
        console.log(res);
    }

    await Promise.all(Users.map(async (user) => {
        const {email, password, nickname} = user;

        const res = await prisma.user.create({
            data: {email, password, nickname}
        })
        console.log(res);
    }));

    await Promise.all(Todos.map(async (todo) => {
        const {title, description, priority, userId} = todo;

        const res = await prisma.todo.create({
            data: {title, description, priority, userId}
        })

        console.log(res);
    }))

}

async function main() {
    await seedData();
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
