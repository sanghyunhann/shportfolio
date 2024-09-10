import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">  {/* 텍스트와 이미지를 가로로 배치 */}
          {/* 이미지 추가 */}
          <img
          src="/images/myimage.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full" 
          />
          <h1 className="leading-[1.15]">
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            안녕하세요.
            <br /> 신입 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
        </div>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
