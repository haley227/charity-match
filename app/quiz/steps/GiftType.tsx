import { ChangeEvent } from "react";
import { Answers } from "../page";
import { SelectableCard } from "@/components/global/SelectableCard";

export const GiftTypeStep = ({ answers, handleChange }: { answers: Answers; handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void}) => {
  return (
    <div className="flex flex-col content-center">
      <h2>How would like to give? Select all that apply</h2>
      <SelectableCard displayName="Volunteer" inputValue="volunteer" inputName="giftType" onClick={handleChange} />
      <SelectableCard displayName="Monetary Donation" inputValue="monetary" inputName="giftType" onClick={handleChange} />
      <SelectableCard displayName="Item Donation" inputValue="item" inputName="giftType" onClick={handleChange} />
      {
         (answers.giftType.includes('volunteer') || answers.giftType.includes('item')) && (
          <div>
            <input type="text" onChange={handleChange} name="zipcode" placeholder="Enter your zip code" />
            <div>
              I would like a charity within
              <select name="radius" onChange={handleChange}>
                <option value="0-25">0-25</option>
                <option value="0-25">0-25</option>
                <option value="50-100">50-100</option>
              </select>
              miles of my location
            </div>
          </div>
         )
      }
    </div>
  );
};
