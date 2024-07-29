import React,{useState, useEffect} from "react";
import CustomDialog from "../../components/customDialog";

import filterIcon from '../../assets/filter-icon.png'
import './style.css'
import { InputMain, TextAreaMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { customerService } from "joegreen-service-library";
import { CustomerMessage } from "joegreen-service-library/dist/services/customerService";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { useLoading } from "../../components/utils/loadingContext";

export function CustomerSupport (): React.JSX.Element {
    const token = window.localStorage.getItem('accessToken')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    let [messages,setMessages] = useState<CustomerMessage[]>([])
    let {triggerError,triggerSuccess} = useNotificationTrigger()
    let {setLoading,setLoadingText} = useLoading()
    let [currentId,setCurrentId] = useState('')
    let [replyData,setReplyData] = useState<CustomerMessage>({email:'',_id:'',message:'',created:'',replied:false})
    let [reply,setReply] = useState('')
    function setReplyTo(id:string){
        let data = messages.filter(x=>x._id == id)[0]
        setReplyData(data)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        try {
          setLoading(true);
          setLoadingText('Sending your message...');
          await customerService.replyToCustomerMessage(replyData._id, reply,token);
          triggerSuccess({ title: 'Success', message: 'Your message has been sent successfully!' });
          setReply('')
        } catch (error) {
          triggerError({ title: 'Error', message: 'Failed to send your message. Please try again.' });
        } finally {
          setLoading(false);
          closeDialog()
        }
      };
    const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };

      // Fetch messages with optional filters
const fetchMessages = async () => {
    try {
      const messages = await customerService.getCustomerMessages({
        replied: false, // or true
        startDate: '',
        endDate: ''
      });
      console.log(messages);
      setMessages(messages)
    } catch (error) {
      console.error('Error fetching customer messages:', error);
    }
  }

  useEffect(()=>{
    fetchMessages()
  },[])

    return (
        <div>
        <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
            <div>
                <div className="py-1" />
                <p className="font-subtitle font-bold">Replying: {replyData.email}</p>
                <p className="font-p font-regular">Message: {replyData.message.split(' ').slice(0,15).join(' ')}...</p>
                <div>
                    <p>Reply Message: </p>
                    <div className="py-1" />
                    <TextAreaMain value={reply} onChange={setReply} />
                </div>
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="py-2" />
                    <p className="font-p font-regular no-space">
                        <button onClick={handleSubmit} className="vi-button">Send Reply</button>
                    </p>
                    </div>
                </div>
                <div className="py-2" />                
            </div>
        </CustomDialog>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">CUSTOMER SUPPORT</p>
                                </div>
                            </div>
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">Showing All</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="py-1" />
                        <div className="util-divider" />
                    </div>
                    <div className="customerSupportContents">
                        <div className="container-fluid no-space">
                            <div className="row no-space">
                                {messages.map((x,index)=>{
                                    return (
                                <div key={index} className="col-12 col-sm-6 col-lg-4 no-space">
                                    <div className="messageContainer p-2">
                                        <div>
                                            <div className="messageFrom p-2 border-gray-radius">
                                                <p className="font-p">Not Replied</p>
                                                <p className="font-p font-regular no-space">From: {x.email}</p>
                                                <p className="font-p font-regular no-space">Sent On: {String(new Date(x.created)).split(' ').slice(0,4).join(' ')}</p>
                                                <p className="font-p font-medium">Message: </p>
                                                <p className="font-p no-space">{x.message}</p>
                                                        <div className="py-1" />
                                                        <p className="font-p font-regular no-space">
                                                    <button onClick={()=>{openDialog(); setReplyTo(x._id)}} className="vi-button">Reply</button>
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


