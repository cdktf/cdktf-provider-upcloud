# `dataUpcloudManagedDatabaseValkeySessions` Submodule <a name="`dataUpcloudManagedDatabaseValkeySessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseValkeySessions <a name="DataUpcloudManagedDatabaseValkeySessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions upcloud_managed_database_valkey_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions(scope: Construct, id: string, config: DataUpcloudManagedDatabaseValkeySessionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig">DataUpcloudManagedDatabaseValkeySessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig">DataUpcloudManagedDatabaseValkeySessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions"></a>

```typescript
public putSessions(value: IResolvable | DataUpcloudManagedDatabaseValkeySessionsSessions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions"></a>

```typescript
public resetSessions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseValkeySessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseValkeySessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseValkeySessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput">sessionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions"></a>

```typescript
public readonly sessions: DataUpcloudManagedDatabaseValkeySessionsSessionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput"></a>

```typescript
public readonly sessionsInput: IResolvable | DataUpcloudManagedDatabaseValkeySessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseValkeySessionsConfig <a name="DataUpcloudManagedDatabaseValkeySessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseValkeySessionsConfig: dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit">limit</a></code> | <code>number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset">offset</a></code> | <code>number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order">order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions">sessions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#service DataUpcloudManagedDatabaseValkeySessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#limit DataUpcloudManagedDatabaseValkeySessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#offset DataUpcloudManagedDatabaseValkeySessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#order DataUpcloudManagedDatabaseValkeySessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions"></a>

```typescript
public readonly sessions: IResolvable | DataUpcloudManagedDatabaseValkeySessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.2/docs/data-sources/managed_database_valkey_sessions#sessions DataUpcloudManagedDatabaseValkeySessions#sessions}

---

### DataUpcloudManagedDatabaseValkeySessionsSessions <a name="DataUpcloudManagedDatabaseValkeySessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseValkeySessionsSessions: dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseValkeySessionsSessionsList <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseValkeySessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>[]

---


### DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseValkeySessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions">activeChannelSubscriptions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase">activeDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">activePatternMatchingChannelSubscriptions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge">connectionAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle">connectionIdle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags">flags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw">flagsRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands">multiExecCommands</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer">outputBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory">outputBufferMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength">outputListLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer">queryBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree">queryBufferFree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeChannelSubscriptions`<sup>Required</sup> <a name="activeChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```typescript
public readonly activeChannelSubscriptions: number;
```

- *Type:* number

---

##### `activeDatabase`<sup>Required</sup> <a name="activeDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase"></a>

```typescript
public readonly activeDatabase: string;
```

- *Type:* string

---

##### `activePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="activePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```typescript
public readonly activePatternMatchingChannelSubscriptions: number;
```

- *Type:* number

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr"></a>

```typescript
public readonly clientAddr: string;
```

- *Type:* string

---

##### `connectionAge`<sup>Required</sup> <a name="connectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge"></a>

```typescript
public readonly connectionAge: number;
```

- *Type:* number

---

##### `connectionIdle`<sup>Required</sup> <a name="connectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle"></a>

```typescript
public readonly connectionIdle: number;
```

- *Type:* number

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags"></a>

```typescript
public readonly flags: string[];
```

- *Type:* string[]

---

##### `flagsRaw`<sup>Required</sup> <a name="flagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw"></a>

```typescript
public readonly flagsRaw: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiExecCommands`<sup>Required</sup> <a name="multiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands"></a>

```typescript
public readonly multiExecCommands: number;
```

- *Type:* number

---

##### `outputBuffer`<sup>Required</sup> <a name="outputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer"></a>

```typescript
public readonly outputBuffer: number;
```

- *Type:* number

---

##### `outputBufferMemory`<sup>Required</sup> <a name="outputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory"></a>

```typescript
public readonly outputBufferMemory: number;
```

- *Type:* number

---

##### `outputListLength`<sup>Required</sup> <a name="outputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength"></a>

```typescript
public readonly outputListLength: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryBuffer`<sup>Required</sup> <a name="queryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer"></a>

```typescript
public readonly queryBuffer: number;
```

- *Type:* number

---

##### `queryBufferFree`<sup>Required</sup> <a name="queryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree"></a>

```typescript
public readonly queryBufferFree: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseValkeySessionsSessions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>

---



