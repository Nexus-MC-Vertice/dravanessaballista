<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Landing architecture
- Keep contact details in src/config/site.ts and shared section controls in src/components/landing/ui.tsx so all appointment links use the same verified destination.
- Unconfigured contact numbers must not produce WhatsApp links; reserve physician photography until real photos are supplied to avoid false medical identity.
- Store uploaded landing photographs as CDN asset pointers and share the portrait across its existing placements to keep the supplied originals intact without repository binaries.
- Share the official logo through the existing landing Logo control using a CDN pointer, with a padded local favicon derivative, so branding stays consistent without altering the original asset.
- Keep legal content in separate public TanStack routes with a shared LegalPage layout; each leaf owns its metadata and canonical URL to avoid duplicate search tags.
- Store professional identification and payment rules alongside contact configuration so factual assertions have a single source and concrete tests.
