import fs from "fs"
import fsextra from "fs-extra"

export async function getUserData(guild, user) {
    const jsonString = fs.readFile(`./data/${guild.id}/users/${user.id}.json`)
    return JSON.parse(jsonString)
}

export async function ensureUser(guild, user) {
    fsextra.ensureDir(`./data/${guild.id}/users/${user.id}`)
}

export async function ensureGuild(guild) {
    fsextra.ensureDir(`./data/${guild.id}/users/${user.id}`)
}

export async function setExp(guild, user, exp) {
    const data = await getUserData(guild, user)
    data.exp = exp
    fs.writeFile(`./data/${guild.id}/users/${user.id}.json`, JSON.stringify(data))
}

export async function getExp(guild, user) {
    const data = await getUserData(guild, user)
    return data.exp
}

export async function setLevel(guild, user, level) {
    const data = await getUserData(guild, user)
    data.level = level
    fs.writeFile(`./data/${guild.id}/users/${user.id}.json`, JSON.stringify(data))
}

export async function getLevel(guild, user, exp) {
    const data = await getUserData(guild, user)
    return data.level
}

export async function verifyLevel(guild, user) {

}
