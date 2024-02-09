import { test , expect} from "@playwright/test";

test("Testing Api",async ({request}) =>{
    let result1 = (await request.get("https://catfact.ninja/breeds"));
    
    expect(result1.ok()).toBeTruthy();

    let result2 = (await request.get("https://catfact.ninja/fact"));
    
    expect(result2.ok()).toBeTruthy();

    let result3 = (await request.get("https://catfact.ninja/facts"));
    
    expect(result3.ok()).toBeTruthy();
})