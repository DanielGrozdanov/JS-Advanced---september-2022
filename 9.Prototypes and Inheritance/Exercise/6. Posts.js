function solution() {

    class Post {
        constructor(title, content) {
            this._title = title;
            this._content = content;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            return this._title = value;
        }

        get content() {
            return this._content;
        }

        set content(value) {
            return this._content = value;
        }

        toString() {
            return `Post: ${this._title}\nContent: ${this._content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.comments = [];
        }

        addComment(comment) {
            return this.comments.push(comment);
        }

        toString() {
            let result = [super.toString(), `Rating: ${this.likes} - ${this.dislikes}`,]
            if (this.comments.length > 0) {
                result.push("Comments: ");
                this.comments.forEach(c => result.push(` * ${c}`));
            }

            return result.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view(){
           return this.views++;
        }
        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}



const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());


let blogPost = new classes.BlogPost("BlogTite", "BlogContent", 500)
console.log(blogPost.view())
console.log(blogPost.toString())

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!