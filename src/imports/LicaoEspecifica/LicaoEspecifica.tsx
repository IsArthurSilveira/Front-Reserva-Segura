import svgPaths from "./svg-j1pip9xt12";

function Paragraph() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-[24.883px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#1e2939] text-[14px] whitespace-nowrap">9:41</p>
      </div>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#1e2939] h-[4.992px] left-[3.25px] rounded-[1px] top-[3.25px] w-[16.993px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#1e2939] h-[5.991px] left-[22.73px] rounded-br-[8px] rounded-tr-[8px] top-[2.94px] w-[1.997px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[11.981px] relative rounded-[8px] shrink-0 w-[23.982px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[43.99px] relative shrink-0 w-[362.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[23.982px] relative size-full">
        <Paragraph />
        <Container1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[193.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[18%_32%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.08 124.155">
          <path d={svgPaths.p1338880} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[193.992px] items-start left-0 opacity-20 top-0 w-[314.138px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[31.989px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9893 31.9893">
        <g id="Icon">
          <path d={svgPaths.p23bdb400} fill="var(--fill-0, #618C78)" id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66911" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[125.06px] pl-[15.995px] pr-[16.014px] rounded-[42042000px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-[63.998px] top-[65px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[193.992px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(161.303deg, rgb(136, 169, 131) 8.0003%, rgb(63, 168, 162) 92%)" }} data-name="Container">
      <Container7 />
      <Button />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.16%_37.54%_20.88%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-5.57%_-7.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3221 16.6517">
            <path d={svgPaths.p2dfe7d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[15.995px] pt-[7.988px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-[80.326px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">06:25 / 17:45</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[128.29px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-center relative size-full">
        <Button1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.16%_58.36%_29.18%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-6.26%_-11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16033 14.9919">
            <path d={svgPaths.pef000f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.16%_91.67%_70.85%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-16.71%_-100.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50145 6.66333">
            <path d={svgPaths.p9363240} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.16%_84.86%_42.83%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-7.88%_-38.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.86322 12.2634">
            <path d={svgPaths.p1b03fe00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[35.983px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[15.995px] pt-[7.988px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.16%_70.85%_70.85%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-16.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66323 6.66323">
            <path d={svgPaths.pf652700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.16%_70.85%_70.85%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-16.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66323 6.66323">
            <path d={svgPaths.p1838fa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.16%_66.69%_66.69%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-14.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4956 7.4956">
            <path d={svgPaths.p221f0700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.16%_66.69%_66.69%_4.16%]" data-name="Vector">
        <div className="absolute inset-[-14.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4956 7.4956">
            <path d={svgPaths.p1255b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[35.983px] min-w-px relative rounded-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[15.995px] pt-[7.988px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[79.954px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#618c78] h-[59.985px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.995px] py-[12px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[253.977px] items-start overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20.987px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] min-w-px not-italic relative text-[14px] text-center text-white">Lista de Vídeos</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex-[153.075_0_0] from-[#86a783] h-[43.99px] min-w-px relative rounded-[42042000px] to-[#88a983] via-1/2 via-[#87a883]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.492px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20.987px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] min-w-px not-italic relative text-[#6a7282] text-[14px] text-center">Descrição</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex-[153.075_0_0] h-[43.99px] min-w-px relative rounded-[42042000px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.492px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7.988px] h-[43.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.988px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_703)" id="Icon">
          <path d={svgPaths.p308e9c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          <path d={svgPaths.p2fe59080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
        </g>
        <defs>
          <clipPath id="clip0_2_703">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5.991px] pr-[6.01px] relative rounded-[42042000px] shrink-0 size-[31.989px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 0%, rgb(63, 168, 162) 100%)" }} data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[21.006px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] min-w-px not-italic relative text-[#101828] text-[14px]">Introdução</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">06:25 / 17:41</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[37.001px] items-start relative shrink-0 w-[170.186px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.71%_12.55%_24.99%]" data-name="Vector">
        <div className="absolute inset-[-5.57%_-7.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3222 16.6516">
            <path d={svgPaths.p2c5b9ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col items-start pt-[10.004px] px-[10.004px] relative rounded-[42042000px] shrink-0 size-[39.996px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 177, 241) 0%, rgb(90, 157, 229) 100%)" }} data-name="Button">
      <Icon6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[71.986px] relative rounded-[16px] shrink-0 w-[314.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[19.988px] py-[16px] relative size-full">
        <Container14 />
        <Container15 />
        <Button6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.988px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_703)" id="Icon">
          <path d={svgPaths.p308e9c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          <path d={svgPaths.p2fe59080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
        </g>
        <defs>
          <clipPath id="clip0_2_703">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5.991px] pr-[6.01px] relative rounded-[42042000px] shrink-0 size-[31.989px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 0%, rgb(63, 168, 162) 100%)" }} data-name="Container">
      <Icon7 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[21.006px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Por que ter uma reserva?</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[15.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">10:00 / 10:20</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[37.001px] items-start relative shrink-0 w-[170.186px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.71%_12.55%_24.99%]" data-name="Vector">
        <div className="absolute inset-[-5.57%_-7.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3222 16.6516">
            <path d={svgPaths.p2c5b9ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col items-start pt-[10.004px] px-[10.004px] relative rounded-[42042000px] shrink-0 size-[39.996px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 177, 241) 0%, rgb(90, 157, 229) 100%)" }} data-name="Button">
      <Icon8 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[71.986px] relative rounded-[16px] shrink-0 w-[314.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[19.988px] py-[16px] relative size-full">
        <Container17 />
        <Container18 />
        <Button7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-[7.772px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center pl-[12.099px] pr-[12.118px] relative rounded-[42042000px] shrink-0 size-[31.989px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[42.013px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-[-2px] w-[171px]">Quanto guardar mensalmente</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">10:00 / 10:20</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[58.008px] items-start relative shrink-0 w-[170.186px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.71%_12.55%_24.99%]" data-name="Vector">
        <div className="absolute inset-[-5.57%_-7.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3222 16.6516">
            <path d={svgPaths.p2c5b9ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col items-start pt-[10.004px] px-[10.004px] relative rounded-[42042000px] shrink-0 size-[39.996px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 177, 241) 0%, rgb(90, 157, 229) 100%)" }} data-name="Button">
      <Icon9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[89.997px] relative rounded-[16px] shrink-0 w-[314.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[19.988px] py-[16px] relative size-full">
        <Container20 />
        <Container21 />
        <Button8 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-[8.066px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center px-[11.962px] relative rounded-[42042000px] shrink-0 size-[31.989px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[21.006px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Onde investir sua reserva</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.995px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">15:20 / 15:20</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[37.001px] items-start relative shrink-0 w-[170.186px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.71%_12.55%_24.99%]" data-name="Vector">
        <div className="absolute inset-[-5.57%_-7.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3222 16.6516">
            <path d={svgPaths.p2c5b9ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col items-start pt-[10.004px] px-[10.004px] relative rounded-[42042000px] shrink-0 size-[39.996px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 177, 241) 0%, rgb(90, 157, 229) 100%)" }} data-name="Button">
      <Icon10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[71.986px] relative rounded-[16px] shrink-0 w-[314.138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[19.988px] py-[16px] relative size-full">
        <Container23 />
        <Container24 />
        <Button9 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[11.981px] h-[341.898px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[803.806px] left-[12px] top-[85px] w-[362.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.982px] items-start overflow-clip pt-[19.988px] px-[23.982px] relative rounded-[inherit] size-full">
        <Container5 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[919.782px] items-start relative shrink-0 w-full" data-name="App">
      <Container />
      <Container4 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[940px] items-start left-0 top-0 w-[386px]" data-name="Body">
      <App />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[27.996px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9956 27.9956">
        <g id="Icon">
          <path d={svgPaths.p5d2e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66974" />
          <path d={svgPaths.p33e952f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66974" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[23.982px] relative shrink-0 w-[122.534px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[61px] not-italic text-[16px] text-center text-white top-[-1.75px] whitespace-nowrap">Iniciar Avaliação</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] from-[#c18c00] h-[55.991px] relative rounded-[16px] shrink-0 to-[#f1dd7b] w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.988px] items-center justify-center pl-[61.786px] pr-[61.806px] relative size-full">
          <Icon11 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[87.98px] items-start left-[9px] px-[39.996px] top-[852px] w-[362.102px]" data-name="App">
      <Button10 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[32.043px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.043 32.043">
        <g id="Group 42">
          <g id="Ellipse 5" />
          <g id="Group">
            <path d={svgPaths.p3644e700} id="Path" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[26.997px] relative shrink-0 w-[121.301px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] whitespace-nowrap">Reserva de Emergência</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[11.981px] h-[38px] items-center left-0 pl-[15.995px] pr-[16px] py-[12px] top-[38.98px] w-[386px]" data-name="Container">
      <Group />
      <Heading />
    </div>
  );
}

export default function LicaoEspecifica() {
  return (
    <div className="bg-white relative size-full" data-name="Lição-Específica">
      <Body />
      <App1 />
      <Container25 />
    </div>
  );
}