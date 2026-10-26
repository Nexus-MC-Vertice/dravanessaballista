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
- Store landing photographs and the official logo as real image files in src/assets (never .asset.json CDN pointers), because the site is self-hosted on Hostinger where Lovable's /__l5e asset proxy returns 404.
- Share the official logo through the existing landing Logo control, with a padded local favicon derivative, so branding stays consistent without altering the original asset.
- Keep legal content in separate public TanStack routes with a shared LegalPage layout; each leaf owns its metadata and canonical URL to avoid duplicate search tags.
- Store professional identification and payment rules alongside contact configuration so factual assertions have a single source and concrete tests.
