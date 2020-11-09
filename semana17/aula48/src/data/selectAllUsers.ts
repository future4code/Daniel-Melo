import { connection } from "..";
import UserFilter from "../types/UserFilter";

export default async function selectAllUsers(filter: UserFilter):Promise<any> {
   const result = await connection('aula48_exercicio')
      .where('name', 'like', `%${filter.name}%`)
      .andWhere('type', 'like', `%${filter.type}%`)
      .limit(filter.limit)
      .orderBy(filter.orderBy, filter.order)
      .offset((filter.page - 1) * filter.limit)


   return result
} 