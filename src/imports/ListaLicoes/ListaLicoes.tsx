import svgPaths from "./svg-4z4nvx9oul";
import { imgVector, imgGroup } from "./svg-ille9";

function Text() {
  return (
    <div className="absolute h-[20.987px] left-[23.98px] top-[14px] w-[29.053px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-[-0.75px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#1e2939] h-[5.991px] left-[2px] rounded-[1px] top-[2px] w-[13.998px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#1e2939] h-[5.991px] left-[21.48px] rounded-br-[6px] rounded-tr-[6px] top-[1.68px] w-[1.997px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute border-[#1e2939] border-[1.253px] border-solid h-[11.981px] left-[337.94px] rounded-[6px] top-[18.5px] w-[23.982px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[38.978px] relative shrink-0 w-[385.908px]" data-name="Container">
      <Text />
      <Container1 />
    </div>
  );
}

function Group6() {
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
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] whitespace-nowrap">Lista de Lições</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[11.981px] h-[38px] items-center pl-[15.995px] pr-[16px] py-[12px] relative shrink-0 w-[386px]" data-name="Container">
      <Group6 />
      <Heading />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#618c78] h-[38px] relative rounded-[42042000px] shrink-0 w-[70.987px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#618c78] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[35.75px] not-italic text-[14px] text-center text-white top-[7.99px] whitespace-nowrap">Todas</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[42042000px] shrink-0 w-[74.883px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37.75px] not-italic text-[#6a7282] text-[14px] text-center top-[7.99px] whitespace-nowrap">Básico</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[42042000px] shrink-0 w-[120.753px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[60.75px] not-italic text-[#6a7282] text-[14px] text-center top-[7.99px] whitespace-nowrap">Intermediário</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[42042000px] shrink-0 w-[96.614px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[48.75px] not-italic text-[#6a7282] text-[14px] text-center top-[7.99px] whitespace-nowrap">Avançado</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[7.988px] h-[59px] items-center left-0 overflow-clip pb-[12px] pl-[15.995px] pr-[16px] top-[77px] w-[386px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.996px] relative shrink-0 w-[330.113px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.75px] whitespace-nowrap">Fundamentos Financeiros</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9867 21.987">
            <path d={svgPaths.p306bd780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="ShieldIcon">
      <Icon />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ShieldIcon />
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 140, 120) 0%, rgb(136, 169, 131) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[180.66_0_0] h-[53.994px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[181px]">Reserva de Emergência</p>
      </div>
    </div>
  );
}

function LevelBadge() {
  return (
    <div className="bg-[#88a983] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[49.511px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Básico</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[53.994px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph />
        <LevelBadge />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">6 módulos • 45 min</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[238.158_0_0] h-[73.983px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container10 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[73.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer />
        <Container9 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Aprenda a criar e manter uma reserva financeira para imprevistos</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +300 XP</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#618c78] h-[35.983px] relative rounded-[42042000px] shrink-0 w-[97.495px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[49.49px] not-italic text-[14px] text-center text-white top-[6.99px] whitespace-nowrap">Começar</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
        <Button4 />
      </div>
    </div>
  );
}

function LessonCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[205.934px] relative rounded-[16px] shrink-0 w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pb-[16px] pl-[15.995px] pr-[16px] pt-[15.995px] relative size-full">
        <Container7 />
        <Paragraph2 />
        <Container11 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9851 19.9851">
            <path d={svgPaths.p1a69e580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99852 9.99259">
            <path d="M0.99926 8.99333V0.99926" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99852 13.9896">
            <path d="M0.99926 12.9904V0.99926" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99852 4.99632">
            <path d="M0.99926 3.99706V0.99926" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="ChartIcon">
      <Icon1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ChartIcon />
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(63, 168, 162) 0%, rgb(91, 191, 186) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[180.66_0_0] h-[53.994px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[181px]">Planejamento Orçamentário</p>
      </div>
    </div>
  );
}

function LevelBadge1() {
  return (
    <div className="bg-[#88a983] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[49.511px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Básico</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[53.994px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph3 />
        <LevelBadge1 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">8 módulos • 60 min</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[238.158_0_0] h-[73.983px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container15 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[73.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer1 />
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Domine técnicas para organizar suas finanças mensais</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +400 XP</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#618c78] h-[35.983px] relative rounded-[42042000px] shrink-0 w-[97.495px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[49.49px] not-italic text-[14px] text-center text-white top-[6.99px] whitespace-nowrap">Começar</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Button5 />
      </div>
    </div>
  );
}

function LessonCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[205.934px] relative rounded-[16px] shrink-0 w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pb-[16px] pl-[15.995px] pr-[16px] pt-[15.995px] relative size-full">
        <Container12 />
        <Paragraph5 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.83%_8.33%_16.67%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.986 16.9874">
            <path d={svgPaths.p18051e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[79.17%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99629 4.99629">
            <path d={svgPaths.p3861a280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_33.29%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-9992.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00852 1.99852">
            <path d="M0.99926 0.99926H1.00926" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PiggyIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="PiggyIcon">
      <Icon2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PiggyIcon />
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 0%, rgb(168, 197, 164) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="flex-[180.66_0_0] h-[53.994px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[181px]">Como Economizar Dinheiro</p>
      </div>
    </div>
  );
}

function LevelBadge2() {
  return (
    <div className="bg-[#88a983] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[49.511px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Básico</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[53.994px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph6 />
        <LevelBadge2 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">5 módulos • 30 min</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[238.158_0_0] h-[73.983px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container20 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[73.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer2 />
        <Container19 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Estratégias práticas para guardar dinheiro todo mês</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +250 XP</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#618c78] h-[35.983px] relative rounded-[42042000px] shrink-0 w-[97.495px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[49.49px] not-italic text-[14px] text-center text-white top-[6.99px] whitespace-nowrap">Começar</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text3 />
        <Button6 />
      </div>
    </div>
  );
}

function LessonCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative rounded-[16px] w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pb-[16px] pl-[15.995px] pr-[16px] pt-[15.995px] relative size-full">
        <Container17 />
        <Paragraph8 />
        <Container21 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[681.741px] relative shrink-0 w-[330.113px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start relative size-full">
        <Heading1 />
        <LessonCard />
        <LessonCard1 />
        <LessonCard2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.996px] relative shrink-0 w-[330.113px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.75px] whitespace-nowrap">Investimentos</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute contents inset-[29.17%_8.33%]" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9837 11.9911">
            <path d={svgPaths.p3c694280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99412 7.99411">
            <path d={svgPaths.p1c22af00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TrendIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="TrendIcon">
      <Icon3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TrendIcon />
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 140, 120) 0%, rgb(136, 169, 131) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="flex-[142.954_0_0] h-[80.991px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[143px]">Primeiros Passos em Investimentos</p>
      </div>
    </div>
  );
}

function LevelBadge3() {
  return (
    <div className="bg-[#3fa8a2] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[87.217px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Intermediário</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[80.991px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph9 />
        <LevelBadge3 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">10 módulos • 90 min</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[238.158_0_0] h-[100.98px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container25 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[100.98px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer3 />
        <Container24 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Descubra como começar a investir seu dinheiro com segurança</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +500 XP</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.75px_-6.416px] mask-size-[13.998px_13.998px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6648 7.58212">
            <path d={svgPaths.p518d100} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16648" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.083px_-1.166px] mask-size-[13.998px_13.998px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9989 6.41566">
            <path d={svgPaths.p155fc800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16648" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function LockIcon() {
  return (
    <div className="h-[13.998px] overflow-clip relative shrink-0 w-full" data-name="LockIcon">
      <ClipPathGroup />
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LockIcon />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20.008px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center whitespace-nowrap">Bloqueado</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[38.489px] relative rounded-[42042000px] shrink-0 w-[127.448px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-center px-[17.248px] py-[9.253px] relative size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[38.489px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text4 />
        <Button7 />
      </div>
    </div>
  );
}

function LessonCard3() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex-[1_0_0] min-h-px relative rounded-[16px] w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pb-[16px] pl-[15.995px] pr-[16px] pt-[15.995px] relative size-full">
        <Container22 />
        <Paragraph11 />
        <Container26 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9851 19.9851">
            <path d={svgPaths.p1a69e580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_20.83%_41.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9896 6.99479">
            <path d={svgPaths.p8013200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineChartIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="LineChartIcon">
      <Icon4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LineChartIcon />
      </div>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(63, 168, 162) 0%, rgb(91, 191, 186) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="flex-[142.954_0_0] h-[53.994px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[143px]">Renda Fixa vs Renda Variável</p>
      </div>
    </div>
  );
}

function LevelBadge4() {
  return (
    <div className="bg-[#3fa8a2] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[87.217px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Intermediário</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[53.994px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph12 />
        <LevelBadge4 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">7 módulos • 75 min</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[238.158_0_0] h-[73.983px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container30 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[73.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer4 />
        <Container29 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Entenda as diferenças e escolha a melhor opção para você</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +450 XP</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.75px_-6.416px] mask-size-[13.998px_13.998px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6648 7.58212">
            <path d={svgPaths.p518d100} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16648" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.083px_-1.166px] mask-size-[13.998px_13.998px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9989 6.41566">
            <path d={svgPaths.p155fc800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16648" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function LockIcon1() {
  return (
    <div className="h-[13.998px] overflow-clip relative shrink-0 w-full" data-name="LockIcon">
      <ClipPathGroup1 />
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 size-[13.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LockIcon1 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20.008px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center whitespace-nowrap">Bloqueado</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[38.489px] relative rounded-[42042000px] shrink-0 w-[127.448px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.253px] border-solid inset-0 pointer-events-none rounded-[42042000px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-center px-[17.248px] py-[9.253px] relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[38.489px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text7 />
        <Button8 />
      </div>
    </div>
  );
}

function LessonCard4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[208.44px] relative rounded-[16px] shrink-0 w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pb-[16px] pl-[15.995px] pr-[16px] pt-[15.995px] relative size-full">
        <Container27 />
        <Paragraph14 />
        <Container31 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[495.835px] relative shrink-0 w-[330.113px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start relative size-full">
        <Heading2 />
        <LessonCard3 />
        <LessonCard4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.996px] relative shrink-0 w-[330.113px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-1.75px] whitespace-nowrap">Gestão de Dívidas</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute contents inset-[20.83%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9837 15.9881">
            <path d={svgPaths.p2c62e300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9837 1.99852">
            <path d="M0.99926 0.99926H20.9844" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardIcon() {
  return (
    <div className="h-[23.982px] overflow-clip relative shrink-0 w-full" data-name="CardIcon">
      <Icon5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <CardIcon />
      </div>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[47.984px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(136, 169, 131) 0%, rgb(168, 197, 164) 100%)" }} data-name="IconContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.001px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="flex-[180.66_0_0] h-[53.994px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-[-0.75px] w-[181px]">Como Usar o Cartão de Crédito</p>
      </div>
    </div>
  );
}

function LevelBadge5() {
  return (
    <div className="bg-[#88a983] h-[19.988px] relative rounded-[42042000px] shrink-0 w-[49.511px]" data-name="LevelBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Básico</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[53.994px] relative shrink-0 w-[238.158px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.988px] items-start relative size-full">
        <Paragraph15 />
        <LevelBadge5 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[238.158px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#6a7282] text-[12px]">4 módulos • 25 min</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[238.158_0_0] h-[73.983px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Container35 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.981px] items-start relative size-full">
        <IconContainer5 />
        <Container34 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[40.016px] relative shrink-0 w-[298.124px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1px] w-[299px]">Aprenda a usar o cartão sem cair em armadilhas financeiras</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.995px] relative shrink-0 w-[64.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#618c78] text-[12px] whitespace-nowrap">💎 +200 XP</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#618c78] h-[35.983px] relative rounded-[42042000px] shrink-0 w-[97.495px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[49.49px] not-italic text-[14px] text-center text-white top-[6.99px] whitespace-nowrap">Começar</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[35.983px] relative shrink-0 w-[298.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text10 />
        <Button9 />
      </div>
    </div>
  );
}

function LessonCard5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[205.934px] relative rounded-[16px] shrink-0 w-[330.113px]" data-name="LessonCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start pl-[15.995px] pr-[16px] py-[15.995px] relative size-full">
        <Container32 />
        <Paragraph17 />
        <Container36 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[245.911px] relative shrink-0 w-[330.113px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.981px] items-start relative size-full">
        <Heading3 />
        <LessonCard5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1479.439px] items-center justify-between left-[8px] pl-[25px] pt-[7.988px] top-[127px] w-[362.194px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9851 20.9839">
          <g id="Group">
            <path d={svgPaths.p36f1e4c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
            <path d={svgPaths.p21749a80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HomeNavIcon() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="HomeNavIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-[29.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[15px] not-italic text-[#99a1af] text-[12px] text-center top-[0.25px] whitespace-nowrap">Início</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="flex-[70.263_0_0] h-[61.943px] min-w-px relative" data-name="NavItem">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-center pb-[8px] pt-[7.988px] px-[8px] relative size-full">
          <HomeNavIcon />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9837 21.9837">
          <g id="Group">
            <path d={svgPaths.p16c93800} id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
            <path d={svgPaths.p32d237f0} id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
            <path d={svgPaths.p33942580} id="Vector_3" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LessonsNavIcon() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="LessonsNavIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group3 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-[33.34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[17px] not-italic text-[#618c78] text-[12px] text-center top-[0.25px] whitespace-nowrap">Lições</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="flex-[70.283_0_0] h-[61.943px] min-w-px relative" data-name="NavItem">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-center pb-[8px] pt-[7.988px] px-[8px] relative size-full">
          <LessonsNavIcon />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Savings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="savings">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="savings">
          <mask height="24" id="mask0_1_527" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_527)">
            <path d={svgPaths.p35fa7f00} fill="var(--fill-0, #99A1AF)" id="savings_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-[72.847px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[36.5px] not-italic text-[#99a1af] text-[12px] text-center top-[0.25px] whitespace-nowrap">Caixinhas</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="flex-[88.822_0_0] h-[61.943px] min-w-px relative" data-name="NavItem">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-center pb-[8px] pt-[7.988px] px-[8px] relative size-full">
          <Savings />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.998px_-2.998px] mask-size-[23.982px_23.982px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9867 17.9867">
        <g id="Group">
          <path d={svgPaths.p1f38cf00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function TrophyNavIcon() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="TrophyNavIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group4 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-[27.663px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[14.5px] not-italic text-[#99a1af] text-[12px] text-center top-[0.25px] whitespace-nowrap">Ligas</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="flex-[70.283_0_0] h-[61.943px] min-w-px relative" data-name="NavItem">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-center pb-[8px] pt-[7.988px] px-[8px] relative size-full">
          <TrophyNavIcon />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function ShopNavIcon() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="ShopNavIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9822 23.9822">
        <g clipPath="url(#clip0_1_511)" id="ShopNavIcon">
          <path d={svgPaths.p26082a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p11160600} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinejoin="round" strokeWidth="1.99852" />
          <path d={svgPaths.p24b2ca60} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeWidth="1.99852" />
        </g>
        <defs>
          <clipPath id="clip0_1_511">
            <rect fill="white" height="23.9822" width="23.9822" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-[22.416px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[11.5px] not-italic text-[#99a1af] text-[12px] text-center top-[0.25px] whitespace-nowrap">Loja</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="flex-[70.283_0_0] h-[61.943px] min-w-px relative" data-name="NavItem">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-center pb-[8px] pt-[7.988px] px-[8px] relative size-full">
          <ShopNavIcon />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_-4px_3px_rgba(0,0,0,0.05)] flex h-[83.184px] items-center left-0 pb-[16px] pt-[5.253px] px-[7.988px] rounded-tl-[28px] rounded-tr-[28px] top-[857px] w-[385.908px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[rgba(97,140,120,0.22)] border-solid border-t-[1.253px] inset-0 pointer-events-none rounded-tl-[28px] rounded-tr-[28px]" />
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

export default function ListaLicoes() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pr-[-0.908px] relative size-full" data-name="Lista-Lições">
      <Container />
      <Container4 />
      <Container5 />
      <Container6 />
      <BottomNav />
    </div>
  );
}