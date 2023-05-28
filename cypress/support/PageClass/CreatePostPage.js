
class CreatePostPage
{
    getCommunityTab(){
        return cy.contains('Community')
    } 
    getCreatePostField(){
        return cy.get('div[data-test="Community-StartDiscussion"]')
    }
    getWhatOnYourMindPlacehonder(){
        return cy.get('div[aria-describedby="placeholder-editor"]')
    }
    getPostBtn(){
        return cy.get('button[data-testid="post_create_btn"]')
    }
    getToastMessage(){
        return cy.contains('New Post Published')
    }
    getUploadImage(){
        return cy.get('input[accept="image/png,image/jpg,image/jpeg,video/mp4,video/quicktime"]')
    }
}
export default CreatePostPage


// class CreatePostPage{

//     elements={
//         getCommunityTab:()=>cy.contains('Community'),
//         getCreatePostField:()=>cy.get('div[data-test="Community-StartDiscussion"]'),
//         getWhatOnYourMindPlacehonder:()=>cy.get('div[aria-describedby="placeholder-editor"]'),
//         getPostBtn:()=>cy.get('button[data-testid="post_create_btn"]'),
//         getToastMessage:()=>cy.contains('New Post Published'),
//         getUploadImage:()=>cy.get('input[accept="image/png,image/jpg,image/jpeg,video/mp4,video/quicktime"]')
//     }

//     createPost(){
//         this.elements.getCommunityTab().click()
//         this.elements.getCreatePostField().click()
//         this.elements.getWhatOnYourMindPlacehonder().type('Hello')
//         this.elements.getPostBtn().click()
//     }
// }
// export default CreatePostPage