import  { ClassValue, clsx } from "clsx";
import {twMerge} from 'tailwind-merge'

export function mergeClass (...inputs: ClassValue[]) {
    // o tailwind irá unir (mergear) classes para evitar repetição e verbosidade
    return twMerge(clsx(inputs))
}