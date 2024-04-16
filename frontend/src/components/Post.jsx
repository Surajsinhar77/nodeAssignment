import React from 'react';
import { Button, Card, CardBody, Collapse, Input, Typography } from '@material-tailwind/react';
import Comments from './Comments';
import Postcard from './Postcard';


export default function Post() {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <div className="container m-auto border">
                <div className="card border w-[50%] m-auto p-6">
                    <Postcard toggleOpen={toggleOpen} />
                    {/* <div className="comment">
                        <Button  onClick={toggleOpen}>Comments</Button>
                    </div> */}



                    <Collapse open={open}>
                        <div className="commentSection">
                            <div className="commentOperation">
                                <div className="row w-[100%] flex flex-row py-3 gap-3">
                                    <Input label="Comment" />
                                    <div className="forSendBtn">
                                        <Button>Send</Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Card className="my-2 mx-auto w-full">
                            <CardBody>
                                <Typography>
                                    <Comments />
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        </>
    )
};