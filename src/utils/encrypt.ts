import * as bcrypt from 'bcrypt';

export async function encryption(pw: string) {
    return await bcrypt.hash(pw, 8);
}