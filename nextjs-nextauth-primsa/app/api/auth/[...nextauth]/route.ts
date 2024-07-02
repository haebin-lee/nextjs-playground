/**
 * to set up the Next.js HTTP routes that NextAuth will use to perform authentication within our application.
 */
import {handlers} from '@/auth'
export const {GET, POST} = handlers;
