'use client'

import { useGetCompaniesForReviewing } from "@/apis/companies"
import { useRouter } from "next/navigation"

export default function CompaniesForReviewing() {
  const { data: response, isLoading } = useGetCompaniesForReviewing();
  const router = useRouter();

  if(response?.companies.length === 0 || isLoading) {
    return (
      <></>
    )
  }

  return (
    <section className="my-10 bg-[#F0F7FF] rounded-[8px] py-4 px-5 flex justify-between">
      <p className="text-b2 leading-[150%] font-m text-[#333333]">면접은 어땠나요? 후기 작성하기 </p>
      <div className="mt-1">
        {
          response?.companies.map(({id, name})=>(
            <p className="text-right text-b3 leading-b3 font-r text-[#333333]">👉{' '}
              <span 
                className="underline decoration-black decoration-[#333333] cursor-pointer" 
                onClick={()=>{
                  router.push(`/companies/reviews/create/?id=${id}`)
                }}>
                  {name}
              </span>
            </p>
          ))
        }
      </div>
    </section>
  )
}