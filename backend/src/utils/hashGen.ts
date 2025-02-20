export function random(n:number):string{
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for(let i=0;i<n;i++){
        result+=str[Math.floor(Math.random()*str.length)];
    }
    return result;
}