import React from 'react';
import { Avatar, Typography } from '@material-tailwind/react';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import { FcLikePlaceholder } from "react-icons/fc";


export default function Postcard({toggleOpen}) {
    return (
        <>
            <div className='container'>
                <div className="card border rounded w-full">
                    <div className="CardHeader flex items-center justify-between p-3">
                        <div className='flex gap-3 items-center'>
                            <div className="avatar">
                                <Avatar image="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png" size="lg" />
                                {/* <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png" alt="" /> */}
                            </div>
                            <div className="username">
                                <Typography color="gray">John Doe</Typography>
                                {/* <h2>Jhon doe</h2> */}
                            </div>
                        </div>

                        <div className="options">
                            <button className='border border-gray-300 py-2 px-2 rounded'>
                                <SlOptionsVertical />
                            </button>
                            {/* <p>...</p> */}
                        </div>
                    </div>

                    <div className="cardBody">
                        <div className="caption m-3">
                            <Typography color="gray">This is a caption</Typography>
                            {/* <p>This is a caption</p> */}

                        </div>

                        <div className="image">
                            <img className="w-fit" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        </div>
                    </div>


                    <div className="cardfooter flex gap-2 justify-between p-2">
                        <div className="likes">
                            <button className='border border-gray-300 py-1 px-2 rounded flex items-center gap-2'>
                                <FcLikePlaceholder className="text-xl"/>
                                <Typography color="gray">10 likes</Typography>
                            </button>
                            {/* <p>10 likes</p> */}
                        </div>
                        <div className="comments">
                            <button onClick={toggleOpen} className='border border-gray-300 py-1 px-2 rounded flex items-center gap-2'>
                                <AiOutlineComment className="text-xl"/>
                                <Typography color="gray">5 comment</Typography>
                            </button>
                            {/* <p>5 comments</p> */}
                        </div>

                        <div className="shares">
                            <button className='border border-gray-300 py-1 px-2 rounded flex items-center gap-2'>
                                <AiOutlineShareAlt className="font-xl"/>
                                <Typography color="gray">5 share</Typography>
                            </button>
                            {/* <p>5 comments</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
