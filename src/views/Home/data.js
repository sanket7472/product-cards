const blogs = [
    {
        id: "How I Automated My Life: Practical Python Scripts-001",
        title: "How I Automated My Life: Practical Python Scripts",
        content: "Have you ever found yourself drowning in mundane, repetitive tasks, wishing there was a way to streamline your daily routine? Well, I have good news for you: Python scripts can be your saving grace. With just a few lines of code, you can automate a myriad of tasks, saving time and effort that can be better spent on more meaningful endeavors. Let me walk you through some practical examples of how Python scripts can transform your life. 1. Organizing Files Do you often find your desktop cluttered with files scattered everywhere? Let’s create a simple Python script to organize those files into categorized folders.",
        author: {
            name: "Gabe Araujo",
            avtar: "https://i.pravatar.cc/150?img=3",
        },
        date: "May 16, 2023",
        categories: ["React","Technology"],   
    },
    {
        id: "To Anyone Who Has Lost Themselves-002",
        title: "To Anyone Who Has Lost Themselves",
        content: "Love— be it romantic, self, or otherwise — is rascally.A few undiligent weeks and you can lose yourself, parts of you breaking off in pieces as the sun rises and sets.This is how love breaks. Not in one swift motion, but tiny fracture by tiny fracture until it amounts to a crash. We don not see it coming until it is screeching at us, almost too late, giving only a small warning to change course.You can fall out of love with your partner this way. You can fall out of love with yourself this way. You can fall out of love with your life this way. With your friends. With your family. With your routines. With your passion. With your work. Time has a way of slipping off, never feeling too late until it is. And, love is a speeding train — no matter the form love takes — and if you do not hold onto it, if you do not watch yourself in it, it can leave you behind, breathless, uncertain, lost. We can’t let days speed past without giving them thought, because this is the way we become lost. This is how we run in circles, because we have not stopped long enough to find a direction. Our life can run away with or without us attached to it and, while it seems we are the driver and conductor of whatever exists in our lives, anyone with life experience knows this is not the truth. Life moves on without us.Sometimes love is so swift in its transformations, in its growth, that if we do not pay attention we could miss it, charging ahead down a path that is leading us further from where we want to be going. I do this thing when life gets difficult where I abandon myself.Like I shed the part of myself that needs cultivation and go into survival mode, go into Safe Mode with limited capability, limited access.To stop loving myself is to come home to what I remember, what I know, what feels familiar. To cave into myself — introspective and self-analyzed and caught in the purgatory between thinking and doing — is the safest I ever feel.",
        author: {
            name: "Jamie Varon",
            avtar: "https://i.pravatar.cc/150?img=54",
        },
        date: "Jan 5, 2016",
        categories: ["psychology","Life Lessons"],   
    },
    {
        id: "How I Automated My Life: Practical Python Scripts-003",
        title: "How I Automated My Life: Practical Python Scripts",
        content: "Have you ever found yourself drowning in mundane, repetitive tasks, wishing there was a way to streamline your daily routine? Well, I have good news for you: Python scripts can be your saving grace. With just a few lines of code, you can automate a myriad of tasks, saving time and effort that can be better spent on more meaningful endeavors. Let me walk you through some practical examples of how Python scripts can transform your life. 1. Organizing Files Do you often find your desktop cluttered with files scattered everywhere? Let’s create a simple Python script to organize those files into categorized folders.",
        author: {
            name: "Gabe Araujo",
            avtar: "https://i.pravatar.cc/150?img=68",
        },
        date: "May 16, 2023",
        categories: ["React","Technology"],   
    },
    {
        id: "To Anyone Who Has Lost Themselves-004",
        title: "To Anyone Who Has Lost Themselves",
        content: "Love— be it romantic, self, or otherwise — is rascally.A few undiligent weeks and you can lose yourself, parts of you breaking off in pieces as the sun rises and sets.This is how love breaks. Not in one swift motion, but tiny fracture by tiny fracture until it amounts to a crash. We don not see it coming until it is screeching at us, almost too late, giving only a small warning to change course.You can fall out of love with your partner this way. You can fall out of love with yourself this way. You can fall out of love with your life this way. With your friends. With your family. With your routines. With your passion. With your work. Time has a way of slipping off, never feeling too late until it is. And, love is a speeding train — no matter the form love takes — and if you do not hold onto it, if you do not watch yourself in it, it can leave you behind, breathless, uncertain, lost. We can’t let days speed past without giving them thought, because this is the way we become lost. This is how we run in circles, because we have not stopped long enough to find a direction. Our life can run away with or without us attached to it and, while it seems we are the driver and conductor of whatever exists in our lives, anyone with life experience knows this is not the truth. Life moves on without us.Sometimes love is so swift in its transformations, in its growth, that if we do not pay attention we could miss it, charging ahead down a path that is leading us further from where we want to be going. I do this thing when life gets difficult where I abandon myself.Like I shed the part of myself that needs cultivation and go into survival mode, go into Safe Mode with limited capability, limited access.To stop loving myself is to come home to what I remember, what I know, what feels familiar. To cave into myself — introspective and self-analyzed and caught in the purgatory between thinking and doing — is the safest I ever feel.",
        author: {
            name: "Jamie Varon",
            avtar: "https://i.pravatar.cc/150?img=11",
        },
        date: "Jan 5, 2016",
        categories: ["psychology","Life Lessons"],   
    },
    {
        id: "How I Automated My Life: Practical Python Scripts-005",
        title: "How I Automated My Life: Practical Python Scripts",
        content: "Have you ever found yourself drowning in mundane, repetitive tasks, wishing there was a way to streamline your daily routine? Well, I have good news for you: Python scripts can be your saving grace. With just a few lines of code, you can automate a myriad of tasks, saving time and effort that can be better spent on more meaningful endeavors. Let me walk you through some practical examples of how Python scripts can transform your life. 1. Organizing Files Do you often find your desktop cluttered with files scattered everywhere? Let’s create a simple Python script to organize those files into categorized folders.",
        author: {
            name: "Gabe Araujo",
            avtar: "https://i.pravatar.cc/150?img=68",
        },
        date: "May 16, 2023",
        categories: ["React","Technology"],   
    },
    {
        id: "To Anyone Who Has Lost Themselves-006",
        title: "To Anyone Who Has Lost Themselves",
        content: "Love— be it romantic, self, or otherwise — is rascally.A few undiligent weeks and you can lose yourself, parts of you breaking off in pieces as the sun rises and sets.This is how love breaks. Not in one swift motion, but tiny fracture by tiny fracture until it amounts to a crash. We don not see it coming until it is screeching at us, almost too late, giving only a small warning to change course.You can fall out of love with your partner this way. You can fall out of love with yourself this way. You can fall out of love with your life this way. With your friends. With your family. With your routines. With your passion. With your work. Time has a way of slipping off, never feeling too late until it is. And, love is a speeding train — no matter the form love takes — and if you do not hold onto it, if you do not watch yourself in it, it can leave you behind, breathless, uncertain, lost. We can’t let days speed past without giving them thought, because this is the way we become lost. This is how we run in circles, because we have not stopped long enough to find a direction. Our life can run away with or without us attached to it and, while it seems we are the driver and conductor of whatever exists in our lives, anyone with life experience knows this is not the truth. Life moves on without us.Sometimes love is so swift in its transformations, in its growth, that if we do not pay attention we could miss it, charging ahead down a path that is leading us further from where we want to be going. I do this thing when life gets difficult where I abandon myself.Like I shed the part of myself that needs cultivation and go into survival mode, go into Safe Mode with limited capability, limited access.To stop loving myself is to come home to what I remember, what I know, what feels familiar. To cave into myself — introspective and self-analyzed and caught in the purgatory between thinking and doing — is the safest I ever feel.",
        author: {
            name: "Jamie Varon",
            avtar: "https://i.pravatar.cc/150?img=11",
        },
        date: "Jan 5, 2016",
        categories: ["psychology","Life Lessons"],   
    },
    {
        id: "How I Automated My Life: Practical Python Scripts-007",
        title: "How I Automated My Life: Practical Python Scripts",
        content: "Have you ever found yourself drowning in mundane, repetitive tasks, wishing there was a way to streamline your daily routine? Well, I have good news for you: Python scripts can be your saving grace. With just a few lines of code, you can automate a myriad of tasks, saving time and effort that can be better spent on more meaningful endeavors. Let me walk you through some practical examples of how Python scripts can transform your life. 1. Organizing Files Do you often find your desktop cluttered with files scattered everywhere? Let’s create a simple Python script to organize those files into categorized folders.",
        author: {
            name: "Gabe Araujo",
            avtar: "https://i.pravatar.cc/150?img=68",
        },
        date: "May 16, 2023",
        categories: ["React","Technology"],   
    },
    {
        id: "To Anyone Who Has Lost Themselves-008",
        title: "To Anyone Who Has Lost Themselves",
        content: "Love— be it romantic, self, or otherwise — is rascally.A few undiligent weeks and you can lose yourself, parts of you breaking off in pieces as the sun rises and sets.This is how love breaks. Not in one swift motion, but tiny fracture by tiny fracture until it amounts to a crash. We don not see it coming until it is screeching at us, almost too late, giving only a small warning to change course.You can fall out of love with your partner this way. You can fall out of love with yourself this way. You can fall out of love with your life this way. With your friends. With your family. With your routines. With your passion. With your work. Time has a way of slipping off, never feeling too late until it is. And, love is a speeding train — no matter the form love takes — and if you do not hold onto it, if you do not watch yourself in it, it can leave you behind, breathless, uncertain, lost. We can’t let days speed past without giving them thought, because this is the way we become lost. This is how we run in circles, because we have not stopped long enough to find a direction. Our life can run away with or without us attached to it and, while it seems we are the driver and conductor of whatever exists in our lives, anyone with life experience knows this is not the truth. Life moves on without us.Sometimes love is so swift in its transformations, in its growth, that if we do not pay attention we could miss it, charging ahead down a path that is leading us further from where we want to be going. I do this thing when life gets difficult where I abandon myself.Like I shed the part of myself that needs cultivation and go into survival mode, go into Safe Mode with limited capability, limited access.To stop loving myself is to come home to what I remember, what I know, what feels familiar. To cave into myself — introspective and self-analyzed and caught in the purgatory between thinking and doing — is the safest I ever feel.",
        author: {
            name: "Jamie Varon",
            avtar: "https://i.pravatar.cc/150?img=11",
        },
        date: "Jan 5, 2016",
        categories: ["psychology","Life Lessons"],   
    }
]

export default blogs