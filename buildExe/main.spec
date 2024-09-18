# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['../rebabel-format/main.py'],
    pathex=[],
    binaries=[],
    datas=[('../rebabel-format/rebabel_format/processes', 'rebabel_format/processes'), ('../rebabel-format/rebabel_format/converters', 'rebabel_format/converters'), ('../rebabel-format/rebabel_format/schema.sql', 'rebabel_format') ],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='main',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
