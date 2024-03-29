import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
export default function Page({ blok }) {
    return (
        <main {...storyblokEditable(blok)}>
            {blok.body.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
}
