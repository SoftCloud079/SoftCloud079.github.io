const projects = {


    "SoftCloud":{

        description:
        "The home for all SoftCloud projects, ideas, and creations.",

        story:
        "SoftCloud started as a place to escape the noise for a while. A small corner where ideas could exist, mistakes could happen, and creating something was enough without needing a reason.",

        special:
        "SoftCloud is about the people behind the creations. Friends sharing ideas, laughing at mistakes, helping each other, and bringing something into the world that did not exist before.",

        status:
        "ACTIVE"

    },



    "The Deer Project":{

        description:
        "A 2D animated series about a curious deer exploring the world and finding itself in unexpected situations.",

        story:
        "The Deer Project is a passion project created with friends. The idea is simple: a curious deer wanders through the world, discovering new places, meeting strange things, and causing chaos without even realising it.",

        special:
        "The goal is not to make the most perfect animation. The goal is to let everyone bring their own style into something together. Everyone gets a role, everyone gets a chance to try something new, and in the end all those different pieces become one creation.",

        status:
        "STARTING PHASE"

    },



    "Iris":{

        description:
        "The first SoftCloud Discord bot and the first step into creating something personal.",

        story:
        "Iris started as a way to learn Discord bots. What began as a simple idea slowly grew into something much bigger, with games, conversations, riddles, quotes, music, and a journal system built around her.",

        special:
        "Iris was never just about commands. She was created with the feeling of a friend and assistant, something people could interact with and enjoy. After months of growing, she was allowed to rest instead of endlessly adding features just because she could.",

        status:
        "COMPLETE - RESTING"

    },



    "Rocky":{

        description:
        "A Discord bot experiment inspired by Rocky from Project Hail Mary.",

        story:
        "Rocky was created simply because the character was interesting. After enjoying Rocky's personality and unique way of communicating, the idea was to see if something similar could exist inside a Discord bot.",

        special:
        "Rocky was never meant to become a huge project. It was just a fun experiment, a small idea made because something was cool and worth exploring.",

        status:
        "COMPLETE - RESTING"

    },



    "MRYOLO_But.hes.in.pain":{

        description:
        "A chaotic Discord bot project created from a random funny idea.",

        story:
        "MRYOLO_But.hes.in.pain started from a simple thought: what if a Discord bot existed purely to scream and create chaos? There was no serious plan behind it, just the idea of making something ridiculous that could make people laugh.",

        special:
        "This project represents the silly side of SoftCloud. Not everything needs a deep meaning or a big goal. Sometimes the best projects come from a random idea that makes you laugh enough to build it.",

        status:
        "IN DEVELOPMENT"

    },



    "Cat Discord Game":{

        description:
        "A relaxing cat experience focused on spending time with cats, playing, and enjoying a peaceful world.",

        story:
        "The Cat Discord Game started as a Roblox Studio idea with Critic helping lead the direction of the project. The idea was simple: create a place where people could hang out, interact with cats, and have a fun experience.",

        special:
        "Even after Roblox development became difficult, the idea was not forgotten. With new possibilities through Discord Activities and other platforms, the project still has a chance to come back.",

        status:
        "REVIVED - PLANNING"

    }

};


// popup opening

function openProject(name){

    let popup=document.getElementById("projectPopup");

    let background=document.getElementById("popupBackground");

    let project=projects[name];


    document.getElementById("popupTitle").innerHTML=name;


    document.getElementById("popupDescription").innerHTML=

    `

    <p>${project.description}</p>

    <h3>The Story</h3>

    <p>${project.story}</p>

    <h3>What Makes It Special</h3>

    <p>${project.special}</p>

    `;


    document.getElementById("popupStatus").innerHTML=
    project.status;


    popup.classList.add("show");

    background.classList.add("show");

    document.body.classList.add("popup-open");

}



function closeProject(){

    document.getElementById("projectPopup")
    .classList.remove("show");


    document.getElementById("popupBackground")
    .classList.remove("show");


    document.body.classList.remove("popup-open");

}
