import { Metadata } from "next";
import BusinessCalculator from "./components/business-calculator";
export const metadata: Metadata = {
  title: "Business Setup Cost Calculator UAE | Arbat Corporate",
  description:
    "Calculate your business setup costs in UAE. Get instant estimates for license fees, visa costs, and other business setup expenses.",
  keywords: [
    "UAE business setup cost",
    "company formation cost Dubai",
    "business license cost UAE",
    "Dubai startup cost calculator",
    "UAE company registration fees",
  ],

}
export default function page(){
  return (
    <div>
       <BusinessCalculator/>
    </div>
  )
}