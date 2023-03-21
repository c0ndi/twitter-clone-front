export type IPost = {
   isSinglePost?: boolean;
   authorName: string;
   authorId: string;
   content: string;
   _id: string;
   createdAt?: string;
   photo?: string;
   comments?: TComment [];
   likes?: string [];
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
}

export type TComment = {
   user: TUser;
   content: string;
}
