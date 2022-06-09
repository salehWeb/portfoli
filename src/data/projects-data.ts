import DataBase from './DataBase';
import Node from './Node';
import Tools from './Tools';
import React from './React';
export const Skills = [
    {
        name: "Backend",
        icon: Node,
        skills: [
            {
                name: "Node.js"
            },
            {
                name: "Express.js"
            },
        ]
    },
    {
        name: "Frontend",
        icon: React,
        skills: [
            {
                name: "React.js"
            },
            {
                name: "Redux"
            },
            {
                name: "TailwindCSS"
            },
        ]
    },
    {
        name: "Tools",
        icon: Tools,
        skills: [
            {
                name: "Git"
            },
            {
                name: "Postman"
            },
            {
                name: "Jest"
            }
        ]
    },
    {
        name: "Databases",
        icon: DataBase,
        skills: [
            {
                name: "MySQL"
            },
            {
                name: "MonogoDB"
            },
        ]
    }
]