import {Request, Response} from "express"
import {ListUserReceiveComplimentsService} from "../services/ListUserReceiveComplimentsService"

class ListUserReceiveComplimentsController{

  async handle(request:Request, response:Response){

    const {user_id} = request

    const listUserReceiverComplimentsService = new ListUserReceiveComplimentsService();
 
    const components = await listUserReceiverComplimentsService.execute(user_id)

    return response.json(components)
  }

}

export {ListUserReceiveComplimentsController}