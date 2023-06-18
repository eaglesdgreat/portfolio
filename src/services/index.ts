import { createClient, type ClientConfig, type SanityDocumentStub } from "@sanity/client";
import imageBuilderUrl from "@sanity/image-url"
import { IFooterFormData } from "types"

const config: ClientConfig = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-21', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.REACT_APP_SANITY_SECRET_TOKEN // Only if you want to update content with the client
}

export const client = createClient(config);

const builder = imageBuilderUrl(client);

export const urlFor = (source: string) => builder.image(source);

export async function getAbout () {
  try {
    const abouts = await client.fetch('*[_type == "abouts"]');

    return abouts;
  } catch (e) {
    console.log("err", e);
  }
}

export async function getWorks () {
  try {
    const works = await client.fetch('*[_type == "works"]');

    return works
  } catch (e) {
    console.log("err", e);
  }
}

export async function getSkillsAndExp () {
  try {
    const experiences = await client.fetch('*[_type == "experiences"]');
    const skills = await client.fetch('*[_type == "skills"]');

    return { skills, experiences };
  } catch (e) {
    console.log("err", e);
  }
}

export async function getBrandsAndTestimonials () {
  try {
    const brands = await client.fetch('*[_type == "brands"]');
    const testimonials = await client.fetch('*[_type == "testimonials"]');

    return { testimonials, brands };
  } catch (e) {
    console.log("err", e);
  }
}

export async function createContact (contact: SanityDocumentStub) {
  try {
    const res = await client.create(contact);

    return res;
  } catch (e) {
    console.log("err", e);
  }
  // client.create(contact)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((e) => {
  //     console.log("err", e)
  //   })
}
