"use client";

import Image from "next/image";

import { useIsTabletOrMobile } from "@/hooks/useIsTabletOrMobile";
import MobileFooter from "@/components/footer/MobileFooter";
import { Icons } from "@/components/shared/Icons";

export default function Footer() {
  const isTabletOrMobile = useIsTabletOrMobile();
  if (isTabletOrMobile) return <MobileFooter />;

  return (
    <footer className="w-full bg-white pb-3">
      <div className="mx-44 grid grid-cols-4 justify-items-center">
        <div className="flex flex-col gap-6">
          <Icons.logo />
          <ul className="space-y-2 text-sm text-[#707070]">
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">ჩვენს შესახებ</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">პარტნიორები</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">კარიერა</li>
          </ul>
          <div className="flex items-center gap-3">
            <Icons.appStore />
            <Icons.playStore />
          </div>
        </div>

        <div className="text-sm text-[#707070]">
          <p className="mb-2 font-bold">ინფორმაცია</p>
          <ul className="space-y-2">
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">სიახლეები</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">საინფორმაციო ფურცელი</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">ხელშეკრულებები</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">სამედიცინო პროვაიდერები</li>
          </ul>
          <p className="mt-8 text-xs text-[#707070]">უნისონი © ყველა უფლება დაცულია, 2021</p>
        </div>

        <div className="text-sm text-[#707070]">
          <p className="mb-2 font-bold">დახმარება</p>
          <ul className="space-y-2">
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">კონტაქტი</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">მომხმარებლის ხმა</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">მონაცემთა დაცვა</li>
            <li className="hover:text-[#006A9F] hover:underline cursor-pointer">ხშირად დასმული კითხვები</li>
          </ul>
        </div>

        <div className="flex items-center gap-10 text-sm text-[#707070]">
          <ul className="flex flex-col gap-3">
            <p className="mb-2 font-bold">სოციალური ქსელები</p>
            <li className="flex items-center gap-3 hover:text-[#006A9F] hover:underline cursor-pointer">
              <Image
                src="/socials/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-3 hover:text-[#006A9F] hover:underline cursor-pointer">
              <Image
                src="/socials/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>YouTube</span>
            </li>

            <li className="flex items-center gap-3 hover:text-[#006A9F] hover:underline cursor-pointer">
              <Image
                src="/socials/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-3 hover:text-[#006A9F] hover:underline cursor-pointer">
              <Image
                src="/socials/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <span className="hover:text-[#006A9F] hover:underline">LinkedIn</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
