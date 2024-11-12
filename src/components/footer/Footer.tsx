"use client";

import Image from "next/image";

import { useIsTabletOrMobile } from "@/hooks/useIsTabletOrMobile";
import MobileFooter from "@/components/footer/MobileFooter";
import { Icons } from "@/components/shared/Icons";

export default function Footer() {
  const isTabletOrMobile = useIsTabletOrMobile();
  if (isTabletOrMobile) return <MobileFooter />;
  return (
    <footer className="w-full bg-white">
      <div className="mx-36 grid grid-cols-4 justify-items-center">
        <div className="flex flex-col gap-6">
          <Icons.logo />
          <ul className="space-y-2 text-sm text-[#707070]">
            <li>ჩვენს შესახებ</li>
            <li>პარტნიორები</li>
            <li>კარიერა</li>
          </ul>
          <div className="flex items-center gap-3">
            <Icons.appStore />
            <Icons.playStore />
          </div>
        </div>

        <div className="text-sm text-[#707070]">
          <p className="mb-2 font-bold">ინფორმაცია</p>
          <ul className="space-y-2">
            <li>სიახლეები</li>
            <li>საინფორმაციო ფურცელი</li>
            <li>ხელშეკრულებები</li>
            <li>სამედიცინო პროვაიდერები</li>
          </ul>
          <p className="mt-8 text-xs text-[#707070]">უნისონი © ყველა უფლება დაცულია, 2021</p>
        </div>

        <div className="text-sm text-[#707070]">
          <p className="mb-2 font-bold">დახმარება</p>
          <ul className="space-y-2">
            <li>კონტაქტი</li>
            <li>მომხმარებლის ხმა</li>
            <li>მონაცემთა დაცვა</li>
            <li>ხშირად დასმული კითხვები</li>
          </ul>
        </div>

        <div className="flex items-center gap-10 text-sm text-[#707070]">
          <ul className="flex flex-col gap-3">
            <p className="mb-2 font-bold">სოციალური ქსელები</p>
            <li className="flex items-center gap-3">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>YouTube</span>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-3">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
