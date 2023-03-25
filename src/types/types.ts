export type IPost = {
   authorId: string;
   author: TUser;
   content: string;
   _id: string;
   createdAt?: string;
   photo?: string;
   comments: TComment [] | [];
   likes: string [] | [];
   profilePicture?: string;
}

export type TInputsLogin = {
   email: string;
   password: string;
}

export type TInputsRegister = {
   name: string;
   email: string;
   password: string;
   confirm_password: string;
}

export type TUser = {
   _id: string;
   name: string;
   email: string;
   created_at: string;
   likedPosts: [];
   profilePicture?: string;
   backgroundPicture?: string;
}

export type TComment = {
   user: TUser;
   content: string;
}
